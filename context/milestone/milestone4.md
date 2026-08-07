# Milestone 4: API Contract & DTO (Data Transfer Object)

## 📌 Tujuan Milestone
Memahami instruksi PM mengenai **API Contract First**, memisahkan layer DTO dari Entity, serta mengimplementasikan validasi request otomatis dengan `class-validator` & Swagger OpenAPI.

---

## 💻 Environment & Tools yang Diperlukan
- **NestJS Project** (Dari Milestone 3)
- **Validation Packages**: `class-validator`, `class-transformer`
- **Swagger Documentation**: `@nestjs/swagger`
- **API Testing Tools**: Postman / Bruno / Insomnia

---

## 🧠 Konsep & Mental Model

### Mengapa PM Meminta "API Contract Dulu"?
API Contract adalah kesepakatan format data antara Backend dan Frontend sebelum kode ditulis. Ini mencegah kesalahpahaman format JSON yang dikirim dan diterima.

### Mengapa Harus Memisahkan DTO dan Entity?
- **Entity**: Mewakili struktur **Database**.
- **DTO (Data Transfer Object)**: Mewakili payload **HTTP Request/Response**.

```text
 Client Request (JSON)
        │
        ▼
   [ CreateUserDto ]  ──► Diproses & divalidasi oleh Class-Validator
        │
        ▼
   [ Service Logic ]  ──► Konversi DTO menjadi Entity
        │
        ▼
   [ User Entity ]    ──► Disimpan ke Database oleh ORM
```

---

## 📑 Langkah demi Langkah (Step-by-Step Instructions)

### Langkah 1: Install Package Validasi & Swagger
```powershell
npm install --save class-validator class-transformer @nestjs/swagger
```

### Langkah 2: Aktifkan Global Validation Pipe di `main.ts`
```typescript
app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
```

### Langkah 3: Buat DTO dengan Decorator Validasi
Contoh file `users/dto/create-user.dto.ts`:
```typescript
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@sabitcloud.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Secret123!' })
  @IsString()
  @MinLength(8)
  password: string;
}
```

### Langkah 4: Setup Swagger untuk API Contract
Tambahkan konfigurasi Swagger di `main.ts` agar dokumentasi API otomatis ter-generate di URL `/api/docs`.

---

## 📚 Sumber Belajar & Referensi
1. **NestJS OpenAPI (Swagger) Docs**: [docs.nestjs.com/openapi/introduction](https://docs.nestjs.com/openapi/introduction)
2. **NestJS Validation Pipe**: [docs.nestjs.com/techniques/validation](https://docs.nestjs.com/techniques/validation)
3. **Class Validator Github**: [github.com/typestack/class-validator](https://github.com/typestack/class-validator)
