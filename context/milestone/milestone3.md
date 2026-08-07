# Milestone 3: Database Mapping - ERD to Entity & ORM

## 📌 Tujuan Milestone
Memahami konsep ORM (Object-Relational Mapping), menghubungkan NestJS ke PostgreSQL, serta mampu menerjemahkan desai ERD menjadi Entity TypeScript dan relasi antar tabel (1:1, 1:N, N:M).

---

## 💻 Environment & Tools yang Diperlukan
- **NestJS Project** (Dari Milestone 2)
- **TypeORM / Prisma ORM** (`@nestjs/typeorm` & `typeorm` / `@prisma/client`)
- **PostgreSQL Driver**: `pg`
- **PostgreSQL Container** (Berjalan dari Milestone 1)

---

## 🧠 Konsep & Mental Model

### Apa itu ORM (Object-Relational Mapping)?
ORM adalah jembatan yang mengubah baris data SQL di database menjadi Object TypeScript di dalam kode kita.

```text
  TypeScript World (Kode)                   Database World (Postgres)
 ┌──────────────────────┐                  ┌──────────────────────────┐
 │ class User {         │                  │ Table: users             │
 │   id: number;        │   ◄─── ORM ───►  │ ───┬─────────────────────┤
 │   email: string;     │                  │ id │ email               │
 │ }                    │                  │ 1  │ user@sabitcloud.com │
 └──────────────────────┘                  └────┴─────────────────────┘
```

### Hirarki Pemetaan (Mapping):
- **Class/Entity** ──► **Tabel Database** (`@Entity('users')`)
- **Property/Field** ──► **Kolom Database** (`@Column()`, `@PrimaryGeneratedColumn()`)
- **Relationship** ──► **Foreign Key / Join Table** (`@OneToMany()`, `@ManyToOne()`, `@ManyToMany()`)

---

## 📑 Langkah demi Langkah (Step-by-Step Instructions)

### Langkah 1: Install Package ORM di NestJS
```powershell
npm install --save @nestjs/typeorm typeorm pg
```

### Langkah 2: Konfigurasi TypeORM di `app.module.ts`
Hubungkan NestJS ke database PostgreSQL Docker:
```typescript
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'latihan_for_sabit_cloud',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Hanya untuk development!
})
```

### Langkah 3: Translasi ERD ke Entity (Contoh: User & Project)
1. **User Entity** (`users/entities/user.entity.ts`):
   - `id` (Primary Key)
   - `email` (Unique)
   - `name`
   - Relasi: One-to-Many ke `Project`

2. **Project Entity** (`cloud/entities/project.entity.ts`):
   - `id` (Primary Key)
   - `title`
   - Relasi: Many-to-One ke `User`

### Langkah 4: Verifikasi Tabel Otomatis Terbentuk di Postgres
Jalankan aplikasi NestJS (`npm run start:dev`) lalu buka DBeaver untuk memastikan tabel `users` dan `projects` otomatis terbuat!

---

## 📚 Sumber Belajar & Referensi
1. **NestJS TypeORM Integration Docs**: [docs.nestjs.com/techniques/database](https://docs.nestjs.com/techniques/database)
2. **TypeORM Entity Documentation**: [typeorm.io/entities](https://typeorm.io/entities)
3. **TypeORM Relations Guide**: [typeorm.io/relations](https://typeorm.io/relations)
