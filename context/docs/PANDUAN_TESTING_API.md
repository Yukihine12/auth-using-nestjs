# 🧪 Panduan Pengujian API (API Testing Guide)

Dokumen ini berisi instruksi praktis untuk menguji seluruh endpoint Sabit Cloud Backend secara visual via Swagger UI.

---

## 🌐 1. Membuka Halaman Swagger UI
1. Pastikan server backend sedang berjalan (`npm run start:dev` di folder `sabit-cloud-backend`).
2. Buka browser (Chrome / Edge) dan akses URL:  
   👉 **`http://localhost:3000/api/docs`**

---

## 🔄 2. Langkah Pengujian Terstruktur (Lakukan Berurutan)

### Step 1: Registrasi User Baru (`POST /users`)
1. Buka kelompok **`users`** ──► Klik **`POST /users`** ──► Klik **Try it out**.
2. Masukkan Request Body JSON:
   ```json
   {
     "name": "Sabit Admin",
     "email": "admin@sabitcloud.com",
     "password": "PasswordSuper123!",
     "role": "admin"
   }
   ```
3. Klik **Execute**.
4. **Verifikasi**: Respon harus `201 Created` dan data `password` di respon/database berbentuk string hash acak (`$2b$10$...`).

---

### Step 2: Login untuk Mendapatkan Token JWT (`POST /auth/login`)
1. Buka kelompok **`auth`** ──► Klik **`POST /auth/login`** ──► Klik **Try it out**.
2. Masukkan Request Body JSON:
   ```json
   {
     "email": "admin@sabitcloud.com",
     "password": "PasswordSuper123!"
   }
   ```
3. Klik **Execute**.
4. **Verifikasi**: Server membalas dengan respon JSON berisi token:
   ```json
   {
     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
   }
   ```
5. **Copy string `access_token` tersebut.**

---

### Step 3: Otorisasi Token JWT di Swagger (Memasang Gembok)
1. Scroll ke paling atas halaman Swagger UI.
2. Klik tombol hijau **`Authorize`** (bergambar gembok).
3. Paste token `access_token` pada kolom **Value**.
4. Klik **Authorize**, lalu klik **Close**.

---

### Step 4: Tes Endpoint Terproteksi (`GET /cloud` atau `POST /cloud`)
1. Buka kelompok **`cloud`** ──► Klik **`GET /cloud`** ──► Klik **Try it out** ──► **Execute**.
2. **Verifikasi A (Dengan Token)**: Respon `200 OK` (Aksesk Diterima).
3. **Verifikasi B (Tanpa Token)**: Klik *Authorize* di atas ──► *Logout* ──► Klik *Execute* pada `GET /cloud` lagi ──► Respon `401 Unauthorized` (Akses Ditolak Guard).
