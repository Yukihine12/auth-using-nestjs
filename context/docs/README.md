# 📚 Pusat Dokumentasi Proyek Sabit Cloud Backend

Selamat datang di Dokumentasi Resmi **Sabit Cloud Backend**. Dokumentasi ini disusun khusus untuk menjadi panduan komprehensif agar Anda (atau tim developer lain di masa depan) dapat memahami **apa yang dibuat, mengapa arsitekturnya demikian, bagaimana cara menjalankannya, serta bagaimana alur pengerjaannya dari nol.**

---

### 🗺️ Peta Navigasi Dokumentasi

| Dokumen | Deskripsi | Link File |
| :--- | :--- | :--- |
| **🚀 Cara Memulai & Menjalankan** | Panduan setup environment, prasyarat, perintah run database Docker, server NestJS, dan .env. | [CARA_MEMULAI_DAN_MENJALANKAN.md](file:///d:/kuliah/kuliah/yukihine/project/prepare-for-sabit-cloud/context/docs/CARA_MEMULAI_DAN_MENJALANKAN.md) |
| **🏗️ Arsitektur & Mental Model** | Penjelasan pola Modular Monolith, Dependency Injection vs `db.js`, TypeORM Entity, dan Alur JWT Auth. | [ARSITEKTUR_DAN_ALUR_KERJA.md](file:///d:/kuliah/kuliah/yukihine/project/prepare-for-sabit-cloud/context/docs/ARSITEKTUR_DAN_ALUR_KERJA.md) |
| **📑 Rekap Langkah Pengerjaan** | Jurnal perjalanan & ringkasan aktivitas pengerjaan step-by-step dari Milestone 1 hingga Milestone 6. | [DOKUMENTASI_LANGKAH_PENGERJAAN.md](file:///d:/kuliah/kuliah/yukihine/project/prepare-for-sabit-cloud/context/docs/DOKUMENTASI_LANGKAH_PENGERJAAN.md) |
| **🧪 Panduan Pengujian API** | Langkah demi langkah menguji API via Swagger UI (`/api/docs`), Register, Login JWT, & Guard. | [PANDUAN_TESTING_API.md](file:///d:/kuliah/kuliah/yukihine/project/prepare-for-sabit-cloud/context/docs/PANDUAN_TESTING_API.md) |

---

### 💡 Ringkasan Singkat Proyek

- **Teknologi**: NestJS (v11), PostgreSQL (v16 Alpine), TypeORM, Docker & Docker Compose, Swagger OpenAPI, JWT, Bcrypt.
- **Arsitektur**: Modular Monolith (Modul: `UsersModule`, `AuthModule`, `CloudModule`).
- **Target OS & Node**: Node.js v22.x pada OS Windows.
