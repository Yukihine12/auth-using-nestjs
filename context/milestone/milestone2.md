# Milestone 2: NestJS Fundamentals & Modular Architecture

## 📌 Tujuan Milestone
Memahami arsitektur NestJS, melakukan inisialisasi project NestJS backend, serta memahami pola Modular Monolith yang digunakan pada Sabit Cloud.

---

## 💻 Environment & Tools yang Diperlukan
- **Node.js**: Versi 22.x (Sesuai arahan PM)
- **npm / pnpm / yarn**
- **NestJS CLI**: `@nestjs/cli` versi terbaru
- **TypeScript**: 5.x (Bawaan NestJS)

---

## 🧠 Konsep & Mental Model

### Mengapa NestJS?
NestJS adalah framework Node.js terstruktur berbasis TypeScript. Menggunakan pola yang mirip dengan Angular / Spring Boot (Dependency Injection, Decorators, Modules). NestJS sangat cocok untuk **Modular Monolith** karena kode otomatis terorganisir dalam module-module yang independen secara logika.

### Alur Request NestJS (Layer Architecture):

```text
 Client (Postman/FE)
        │
        ▼
   [ Controller ]   ──► (Routing & Handler HTTP Request/Response)
        │
        ▼
    [ Service ]     ──► (Tempat Logika Bisnis / Business Rules)
        │
        ▼
   [ Repository ]   ──► (Akses Data / Database Query)
        │
        ▼
    [ Module ]      ──► (Pembungkus & Penghubung Controller, Service, Provider)
```

---

## 📑 Langkah demi Langkah (Step-by-Step Instructions)

### Langkah 1: Install NestJS CLI secara Global
Buka terminal dan install CLI NestJS:
```powershell
npm install -g @nestjs/cli
```

### Langkah 2: Inisialisasi Project NestJS
Buat project NestJS baru untuk repositori backend Sabit Cloud:
```powershell
nest new sabit-cloud-backend
```
*Pilih `npm` sebagai package manager.*

### Langkah 3: Pahami Struktur Folder NestJS
Buka folder hasil generate NestJS:
```text
src/
├── app.controller.ts  --> Entry point controller utama
├── app.service.ts     --> Entry point service utama
├── app.module.ts      --> Root module aplikasi
└── main.ts            --> File eksekusi utama (Bootstrap app)
```

### Langkah 4: Buat Resource Pertama (Modular Monolith)
Sesuai arahan PM, kita akan membuat module/resource tanpa langsung mengisi endpoint rumit terlebih dahulu:
```powershell
nest g resource users
```
*Pilih option:*
- Transport layer: **REST API**
- Generate CRUD entry points? **Yes**

---

## 📚 Sumber Belajar & Referensi
1. **Dokumentasi Resmi NestJS**: [docs.nestjs.com](https://docs.nestjs.com/)
2. **NestJS Architecture Overview**: [docs.nestjs.com/first-steps](https://docs.nestjs.com/first-steps)
3. **Understanding Dependency Injection in NestJS**: [docs.nestjs.com/providers](https://docs.nestjs.com/providers)
