# 🚀 Cara Memulai & Menjalankan Proyek

Panduan ini berisi langkah-langkah praktis untuk menyiapkan environment dan menjalankan backend Sabit Cloud di komputer lokal Anda dari nol.

---

## 📋 Prasyarat System (Prerequisites)
Sebelum menjalankan proyek, pastikan perangkat Anda sudah terpasang:
1. **Node.js**: Versi 20.x atau 22.x (Direkomendasikan v22 LTS).
2. **Docker Desktop & Docker Compose**: Untuk menjalankan database PostgreSQL.
3. **Database GUI Client** (Opsional): DBeaver / TablePlus / pgAdmin.

---

## ⚡ Langkah Quick Start (Jalankan Proyek)

### Langkah 1: Jalankan Database PostgreSQL (Docker)
Buka terminal dan navigasi ke folder `database`:
```powershell
cd d:\kuliah\kuliah\yukihine\project\prepare-for-sabit-cloud\database
docker compose up -d
```
*Gunakan `docker compose ps` untuk memastikan container berstatus `Up` di Port 5432.*

---

### Langkah 2: Periksa File `.env` (Environment Variables)
Pastikan file `.env` sudah ada di root folder proyek (`prepare-for-sabit-cloud/.env`).

Isi standar `.env`:
```env
PORT=3000
NODE_ENV=development
TZ=Asia/Jakarta

# Konfigurasi Database PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=latihan_for_sabit_cloud

# Autentikasi JWT
JWT_SECRET=RAHASIA_SUPER_SABIT_CLOUD_KEY_2026_XYZ!
JWT_EXPIRES_IN=1d
```

---

### Langkah 3: Jalankan Backend Server NestJS
Navigasi ke folder backend `sabit-cloud-backend`:
```powershell
cd d:\kuliah\kuliah\yukihine\project\prepare-for-sabit-cloud\backend\sabit-cloud-backend
npm run start:dev
```
*Server akan otomatis berjalan di mode watch (Hot Reload) pada alamat: `http://localhost:3000`.*

---

### Langkah 4: Buka Dokumentasi Interaktif Swagger UI
Buka browser Anda dan akses:
👉 **`http://localhost:3000/api/docs`**

---

## 🧪 Perintah Pengujian (Automated Testing)
Untuk memastikan seluruh logika backend dan unit test berjalan tanpa error:
```powershell
cd d:\kuliah\kuliah\yukihine\project\prepare-for-sabit-cloud\backend\sabit-cloud-backend
npm run test
```
*(Seluruh 7 test suite akan lulus 100% / PASS).*
