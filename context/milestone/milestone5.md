# Milestone 5: Modular Monolith Feature Implementation

## 📌 Tujuan Milestone
Membangun fitur-fitur utama Sabit Cloud (User Management, Auth, Cloud Manager, Payment) dengan mengimplementasikan Repository Pattern, Service Layer, Authentication (JWT), dan transaksi database.

---

## 💻 Environment & Tools yang Diperlukan
- **NestJS Project** (Dari Milestone 4)
- **Auth Packages**: `@nestjs/jwt`, `@nestjs/passport`, `passport`, `passport-jwt`, `bcrypt`
- **PostgreSQL Database**

---

## 🧠 Konsep & Mental Model

### Arsitektur Modular Monolith Sabit Cloud

```text
               ┌──────────────────────────────────────────┐
               │              AppModule                   │
               └────┬─────────────────┬───────────────────┘
                    │                 │
      ┌─────────────▼──────┐   ┌──────▼─────────────┐
      │     AuthModule     │   │     UsersModule    │
      └─────────────┬──────┘   └──────┬─────────────┘
                    │                 │
      ┌─────────────▼──────┐   ┌──────▼─────────────┐
      │ CloudManagerModule │   │    PaymentModule   │
      └────────────────────┘   └────────────────────┘
```
- Setiap module bertanggung jawab atas domainnya sendiri.
- Komunikasi antar-module dilakukan via method call langsung (*in-memory*), bukan melalui HTTP/gRPC (karena ini Monolith, bukan Microservices).

---

## 📑 Langkah demi Langkah (Step-by-Step Instructions)

### Langkah 1: Implementasi Hashing Password & JWT Authentication
1. Gunakan `bcrypt` untuk meng-hash password di `UsersService` saat registrasi.
2. Buat `AuthModule` untuk menangani endpoint `POST /auth/login` dan menghasilkan **JWT Access Token**.

### Langkah 2: Buat JWT Auth Guard
Lindungi endpoint private (seperti kelola cloud resource) dengan Guard:
```typescript
@UseGuards(JwtAuthGuard)
@Controller('cloud')
export class CloudController { ... }
```

### Langkah 3: Implementasi Business Logic di Service Layer
Pastikan Controller hanya memanggil Service.
Contoh alur `AuthService.login()`:
1. Cari user berdasarkan email via `UserRepository`.
2. Bandingkan password plaintext dengan hash via `bcrypt.compare()`.
3. Jika valid, generate JWT Token.

---

## 📚 Sumber Belajar & Referensi
1. **NestJS Authentication Guide**: [docs.nestjs.com/security/authentication](https://docs.nestjs.com/security/authentication)
2. **Passport JWT Strategy**: [docs.nestjs.com/recipes/passport](https://docs.nestjs.com/recipes/passport)
3. **Bcryptjs Package**: [npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt)
