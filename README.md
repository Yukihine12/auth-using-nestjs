# ☁️ e-comerce latihan - Backend Service

Repository ini berisi layanan backend untuk proyek **E-comerce mandiri**, dibangun menggunakan **NestJS**, **TypeScript**, dan **PostgreSQL**.

---

## 📁 Struktur Direktori (Industry Standard Layout)

```text
prepare-for-sabit-cloud/
├── .env.example              # Template variabel lingkungan (Environment Variables)
├── .gitignore                # Konfigurasi pengabaian Git
├── README.md                 # Dokumentasi utama proyek
├── docker-compose.yml        # Orchestration PostgreSQL container untuk lokal dev
│
├── backend/                  # NestJS Application Service Root
│   ├── src/                  # Source code utama (Auth, Cloud Manager, Users, dll)
│   ├── test/                 # Integration & End-to-End Tests
│   ├── Dockerfile            # Multi-stage Docker build untuk NestJS
│   ├── package.json          # Dependencies & Scripts
│   ├── nest-cli.json         # Konfigurasi NestJS CLI
│   └── tsconfig.json         # Konfigurasi TypeScript
│
└── docs/                     # Dokumentasi Resmi Proyek
    ├── context.md            # User context & peta jalan pembelajaran
    ├── architecture/         # Dokumentasi arsitektur sistem & alur kerja
    ├── guides/               # Panduan pengembang (Cara Memulai, Testing API)
    └── milestones/           # Laporan progres milestone (1 - 6)
```

---

## 🚀 Cara Memulai & Menjalankan

### 1. Prerequisites
- **Node.js**: v22 LTS (direkomendasikan)
- **Docker & Docker Compose**

### 2. Jalankan Database (PostgreSQL)
Jalankan perintah ini langsung dari **root folder**:
```bash
docker compose up -d
```

### 3. Jalankan Server Backend NestJS
Navigasi ke folder `backend` dan jalankan mode development:
```bash
cd backend
npm run start:dev
```
Server akan berjalan di `http://localhost:3000`.

### 4. Dokumentasi API (Swagger UI)
Akses dokumentasi OpenAPI/Swagger di browser:
👉 **`http://localhost:3000/api/docs`**

---

## 🧪 Testing

Jalankan pengujian otomatis:
```bash
cd backend
npm run test
```

---