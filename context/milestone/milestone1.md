# Milestone 1: Database Setup & Local Connection

## 📌 Tujuan Milestone
Memastikan environment database PostgreSQL berjalan menggunakan Docker & Docker Compose, serta berhasil terhubung dari lokal (GUI client / CLI).

---

## 💻 Environment & Tools yang Diperlukan
- **Docker Engine & Docker Desktop / CLI** (sudah terinstall di sistem)
- **Docker Compose** (`docker compose` v2)
- **PostgreSQL 16 Alpine Image**
- **Database GUI Client** (Pilih salah satu):
  - DBeaver (Direkomendasikan)
  - TablePlus
  - pgAdmin 4
  - Extension VS Code: *PostgreSQL* oleh Chris Kolkman

---

## 🧠 Konsep & Mental Model

### Mengapa Menggunakan Docker untuk Database di Development?
Menginstall PostgreSQL secara langsung (*native*) di Windows/OS lokal sering kali menimbulkan konflik port, versi yang berbeda antar developer, atau sampah konfigurasi. Dengan Docker, database terisolasi dalam container bersih yang dapat di-reset kapan saja.

### Diagram Arsitektur Database Docker & Host:

```text
┌──────────────────────────────────────────────────────────┐
│ Computer / Laptop (Host OS: Windows)                     │
│                                                          │
│  ┌──────────────────────┐      Port Mapping              │
│  │ Database GUI / Client│ ───► 5432:5432                 │
│  │ (DBeaver / TablePlus)│        │                       │
│  └──────────────────────┘        │                       │
│                                  ▼                       │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Docker Engine                                      │  │
│  │   ┌──────────────────────────────────────────────┐ │  │
│  │   │ Container: postgres_container                │ │  │
│  │   │ Image: postgres:16-alpine                    │ │  │
│  │   │ Database: latihan_for_sabit_cloud            │ │  │
│  │   │ User/Pass: postgres / postgres               │ │  │
│  │   │ Volume: postgres_data (Penyimpanan Data)    │ │  │
│  │   └──────────────────────────────────────────────┘ │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

---

## 📑 Langkah demi Langkah (Step-by-Step Instructions)

### Langkah 1: Pahami Struktur File Database
Periksa folder `database/` pada workspace. Anda memiliki dua file penting:
- `database/Dockerfile`: Kustomisasi image PostgreSQL.
- `database/docker-compose.yml`: Konfigurasi layanan container.

### Langkah 2: Jalankan Container Database
Buka terminal PowerShell dan navigasi ke folder `database`:
```powershell
cd d:\kuliah\kuliah\yukihine\project\prepare-for-sabit-cloud\database
docker compose up -d
```
> **Penjelasan Perintah**:
> - `up`: Membangun dan menjalankan container.
> - `-d` (detached mode): Menjalankan container di background agar terminal tidak terkunci.

### Langkah 3: Verifikasi Container Berjalan
Jalankan perintah berikut untuk memastikan container berstatus `Up`:
```powershell
docker compose ps
# atau
docker ps
```

### Langkah 4: Uji Koneksi Database dari GUI Client
Buka GUI Client pilihan Anda (misal DBeaver / TablePlus) dan buat koneksi baru **PostgreSQL**:
- **Host**: `localhost` atau `127.0.0.1`
- **Port**: `5432`
- **Database**: `latihan_for_sabit_cloud`
- **Username**: `postgres`
- **Password**: `postgres`

Klik **Test Connection**. Jika sukses, selamat! Milestone 1 telah berhasil Anda capai. 🎉

---

## 📚 Sumber Belajar & Referensi
1. **Docker Docs - PostgreSQL Official Image**: [hub.docker.com/_/postgres](https://hub.docker.com/_/postgres)
2. **Docker Compose Docs**: [docs.docker.com/compose](https://docs.docker.com/compose/)
3. **DBeaver Tutorial for PostgreSQL**: [dbeaver.io/docs](https://dbeaver.io/docs/)
