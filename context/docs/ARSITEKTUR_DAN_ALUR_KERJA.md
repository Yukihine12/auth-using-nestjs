# 🏗️ Arsitektur & Mental Model Teknis

Dokumen ini menjelaskan konsep arsitektur, alasan pemilihan teknologi, dan bagaimana setiap komponen di Sabit Cloud Backend saling terhubung.

---

## 🏛️ 1. Arsitektur Modular Monolith
Sabit Cloud dibangun menggunakan pendekatan **Modular Monolith**. 

### Apa Artinya?
Aplikasi ini adalah **satu aplikasi Monolith** (bukan Microservices yang terpisah-pisah di server berbeda), namun kodenya diorganisir secara rapi menjadi **modul-modul domain yang terisolasi** di dalam folder `src/`.

```text
 ┌──────────────────────────────────────────────────────────┐
 │                    AppModule (Root)                      │
 └──────┬──────────────────────┬─────────────────────┬──────┘
        │                      │                     │
 ┌──────▼───────┐       ┌──────▼───────┐      ┌──────▼───────┐
 │ UsersModule  │       │  AuthModule  │      │ CloudModule  │
 └──────────────┘       └──────────────┘      └──────────────┘
```

---

## 🧱 2. Layering Architecture (Alur Request)

Setiap request HTTP yang masuk ke NestJS akan melewati lapisan-lapisan berikut secara runtut:

```text
 Client (Browser / Postman / Swagger)
                │
                │ (HTTP Request: POST /auth/login)
                ▼
      ┌──────────────────┐
      │  JwtAuthGuard    │ ──► Menahan request jika butuh token JWT valid
      └─────────┬────────┘
                │
                ▼
      ┌──────────────────┐
      │   Controller     │ ──► Menerima DTO request, memanggil Service. (Tanpa logika bisnis!)
      └─────────┬────────┘
                │
                ▼
      ┌──────────────────┐
      │    Service       │ ──► Logika Bisnis (Bcrypt hash/compare, penerbitan JWT).
      └─────────┬────────┘
                │
                ▼
      ┌──────────────────┐
      │ Repository / ORM │ ──► TypeORM mengubah Objek TypeScript ◄──► Baris SQL Database.
      └─────────┬────────┘
                │
                ▼
      ┌──────────────────┐
      │ PostgreSQL (DB)  │ ──► Tabel fisik penyimpanan data.
      └──────────────────┘
```

---

## 💉 3. Dependency Injection vs `db.js` (Express/Hapi)

### Mengapa Tidak Ada File `db.js`?
Di Express/Hapi, kita membuat `db.js` lalu melakukan `import db from './db.js'` secara manual di tiap controller.

Di NestJS, koneksi dibuka **sekali** di `app.module.ts` via `TypeOrmModule.forRoot()`. NestJS menyimpan koneksi tersebut di dalam **IoC Container (Inversion of Control)**.

Saat `UsersService` membutuhkan database, kita cukup menuliskan `constructor(@InjectRepository(User) private repo: Repository<User>) {}`. NestJS akan **secara otomatis menyuntikkan (Inject)** koneksi repositori tersebut!

---

## 🔗 4. TypeORM Entity & Relasi Database (1:N)

Pemetaan dari Objek TypeScript ke Tabel PostgreSQL:
- **`User` Entity** (`users/entities/user.entity.ts`): `@Entity('users')`
- **`Cloud` Entity** (`cloud/entities/cloud.entity.ts`): `@Entity('clouds')`

### Hubungan Relasi:
- **1 User** dapat memiliki **Banyak Cloud Project** ──► `@OneToMany(() => Cloud, (cloud) => cloud.user)` di `User`.
- **Banyak Cloud Project** dimiliki oleh **1 User** ──► `@ManyToOne(() => User, (user) => user.clouds)` di `Cloud` (Menciptakan Foreign Key `userId` di tabel `clouds`).

---

## 🔐 5. Alur Autentikasi JWT (JSON Web Token) & Bcrypt

1. **Registrasi (`POST /users`)**:
   Password mentah di-hash menggunakan `bcrypt.hash(password, 10)` sebelum disimpan ke database PostgreSQL.
2. **Login (`POST /auth/login`)**:
   `AuthService` mencocokkan email & mengecek password hash via `bcrypt.compare()`. Jika valid, NestJS menerbitkan `access_token` JWT.
3. **Protected Endpoint (`GET /cloud`)**:
   `JwtAuthGuard` menahan request. `JwtStrategy` mengekstrak token dari Header `Authorization: Bearer <token>`, memverifikasinya, lalu mengizinkan request masuk.
