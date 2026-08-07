# 📑 Dokumentasi Rekap Langkah Pengerjaan (Step-by-Step)

Dokumen ini mencatat seluruh rangkaian aktivitas pengerjaan proyek Sabit Cloud Backend secara berurutan dari Milestone 1 hingga Milestone 6.

---

## 📍 Milestone 1: Setup Database PostgreSQL & Docker
- **Aktivitas**:
  - Membuat `Dockerfile` dan `docker-compose.yml` untuk PostgreSQL 16 Alpine.
  - Membuka port `5432:5432` dan menyiapkan volume data `postgres_data`.
  - Menjalankan database container via `docker compose up -d`.
  - Memverifikasi koneksi database dari lokal via GUI Client (DBeaver).

---

## 📍 Milestone 2: NestJS Fundamentals & Inisialisasi Project
- **Aktivitas**:
  - Menginstall NestJS CLI global (`@nestjs/cli`).
  - Mengatasi izin PowerShell ExecutionPolicy (`Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`).
  - Inisialisasi project NestJS `sabit-cloud-backend`.
  - Meng-generate resource awal `users` (`nest g resource users`) dan `cloud` (`nest g resource cloud`).
  - Memahami fungsi file `.spec.ts` (unit testing) dan struktur layer NestJS (`Controller`, `Service`, `Module`).

---

## 📍 Milestone 3: Database Mapping - ERD to Entity & ORM
- **Aktivitas**:
  - Menginstall paket ORM: `@nestjs/typeorm`, `typeorm`, dan driver `pg`.
  - Mengkonfigurasi koneksi PostgreSQL di `src/app.module.ts` via `TypeOrmModule.forRoot()`.
  - Mengubah DTO/Entity default menjadi TypeORM Entity:
    - `User` Entity (`users/entities/user.entity.ts`) dengan `@Entity('users')`.
    - `Cloud` Entity (`cloud/entities/cloud.entity.ts`) dengan `@Entity('clouds')`.
  - Menghubungkan relasi **One-to-Many** & **Many-to-One** antara `User` dan `Cloud`.
  - Mendaftarkan `TypeOrmModule.forFeature([User])` di `users.module.ts` dan `TypeOrmModule.forFeature([Cloud])` di `cloud.module.ts`.

---

## 📍 Milestone 4: API Contract, DTO Validation & Swagger UI
- **Aktivitas**:
  - Menginstall `class-validator`, `class-transformer`, dan `@nestjs/swagger`.
  - Mengaktifkan global validation pipe di `src/main.ts` (`new ValidationPipe({ whitelist: true, transform: true })`).
  - Membuat DTO validasi lengkap dengan decorator (`@IsEmail()`, `@IsNotEmpty()`, `@MinLength(8)`).
  - Mengkonfigurasi Swagger OpenAPI di `src/main.ts` (`DocumentBuilder`) sehingga dokumentasi visual ter-generate otomatis di URL `http://localhost:3000/api/docs`.
  - Menambahkan decorator `@ApiProperty({ example: '...' })` pada DTO agar Swagger menampilkan contoh JSON payload interaktif.

---

## 📍 Milestone 5: Feature Implementation, Password Hashing & JWT Auth
- **Aktivitas**:
  - Menginstall paket autentikasi: `@nestjs/jwt`, `@nestjs/passport`, `passport`, `passport-jwt`, `bcrypt`.
  - Mengimplementasikan password hashing di `UsersService.create()` menggunakan `bcrypt.hash(password, 10)`.
  - Meng-generate resource `AuthModule` (`nest g resource auth`).
  - Membuat `JwtStrategy` (`passport-jwt`) untuk mengekstrak dan memverifikasi token Bearer dari Header HTTP.
  - Membuat `JwtAuthGuard` (`extends AuthGuard('jwt')`) dan memasangnya di atas `CloudController` (`@UseGuards(JwtAuthGuard)`).
  - Mengimplementasikan fungsi `AuthService.login()` untuk memverifikasi password hash via `bcrypt.compare()` dan menerbitkan `access_token` JWT.

---

## 📍 Milestone 6: Production Readiness, Config `.env` & Testing
- **Aktivitas**:
  - Menginstall paket `@nestjs/config`.
  - Mengkonfigurasi `ConfigModule.forRoot({ isGlobal: true, envFilePath: '../../.env' })` di `app.module.ts` agar membaca file `.env` dari root workspace.
  - Menyiapkan file `.env` pusat berisi kredensial server, database, dan `JWT_SECRET`.
  - Memperbaiki mock provider di seluruh file unit testing (`.spec.ts`) sehingga 7/7 test suite lulus (**100% PASS** saat dijalankan `npm run test`).
  - Membuat multi-stage `Dockerfile` di folder `sabit-cloud-backend` untuk proses build image production.
