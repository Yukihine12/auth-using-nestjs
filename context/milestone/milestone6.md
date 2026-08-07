# Milestone 6: Testing, Production Readiness & Deployment

## 📌 Tujuan Milestone
Memastikan aplikasi aman untuk production melalui penanganan Environment Variables, Unit Testing / End-to-End Testing dengan Jest, Containerization backend app, serta persiapan deployment.

---

## 💻 Environment & Tools yang Diperlukan
- **Config Module**: `@nestjs/config`
- **Testing Framework**: Jest, Supertest
- **Production Container**: Dockerfile untuk NestJS Backend
- **GCP / Server Target** (Untuk deployment)

---

## 🧠 Konsep & Mental Model

### Production Readiness Checklist

```text
 ┌──────────────────────────────────────────────────────────┐
 │ 1. Environment Config  ──► .env (Secret, DB URL, Port)   │
 │ 2. Automated Testing   ──► Unit & E2E Tests (Jest)       │
 │ 3. Production Docker   ──► Multi-stage Docker Build      │
 │ 4. Database Migration  ──► Run migrations before boot    │
 └──────────────────────────────────────────────────────────┘
```

---

## 📑 Langkah demi Langkah (Step-by-Step Instructions)

### Langkah 1: Isolasi Konfigurasi dengan `@nestjs/config`
Gunakan file `.env` dan `@nestjs/config` untuk menyimpan rahasia (DB Password, JWT Secret) agar tidak tertulis keras (*hardcoded*) di dalam kode.

### Langkah 2: Uji Coba Unit Test & E2E Test
Jalankan pengujian bawaan NestJS:
```powershell
npm run test       # Unit test
npm run test:e2e   # End-to-End test
```

### Langkah 3: Membuat Multi-Stage `Dockerfile` untuk Backend
Buat `Dockerfile` di root project backend untuk membangun versi production yang ringan dan cepat.

---

## 📚 Sumber Belajar & Referensi
1. **NestJS Configuration Guide**: [docs.nestjs.com/techniques/configuration](https://docs.nestjs.com/techniques/configuration)
2. **NestJS Testing Guide**: [docs.nestjs.com/fundamentals/testing](https://docs.nestjs.com/fundamentals/testing)
3. **Dockerizing NestJS**: [docs.nestjs.com/deployment](https://docs.nestjs.com/deployment)
