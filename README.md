# Project Promnet1 — Website Perusahaan Data Center (MTH Group)

## Identitas
- **Nama** : Mohamad Thareq Hanne
- **NIM** : 2506663
- **Kelas** : 3C

---

## Deskripsi Singkat
Website *company profile* dan portofolio interaktif untuk perusahaan infrastruktur teknologi dan pusat data bernama **MTH Group**. Menyediakan informasi tentang kapasitas fasilitas *data center*, data yang dikelola, beberapa layanan unggulan (*Brand Strategy, Infrastructure, Cloud & Digital Services*), galeri fasilitas, daftar klien utama (*Selected Clients*), serta formulir pengajuan kontak.

Website ini menggunakan color pallet **Lime Neon (`#C8FF00`)**, dan tata letak responsif menggunakan **React**, **Vite**, dan **Tailwind CSS**

---

## Fitur Utama

- **Beranda (Home)**:
  - Ringkasan *highlight* kapasitas infrastruktur dan pengenalan perusahaan.
- **Tentang Kami (About)**:
  - Visi, misi, standar keamanan 24/7 *Security Operations Center*, serta profil tim pengembang.
- **Layanan (Services)**:
  - Tabel daftar layanan terstruktur menggunakan perulangan `.map()` dengan efek *hover*.
- **Portofolio & Galeri (Gallery / Portfolio)**:
  - *superiority facilities* ruangan data center, maintenence, dan data server
  - Grid *Selected Clients* (Daikin, Pluang, Blibli, Haier, XL Axiata, Astra, SMBC, Siloam, Bybit, dll.) yang rapi dan responsif dengan fitur *grayscale hover*.
- **Kontak (Contact)**:
  - *Interactive Form* dengan tombol toggle *multi-select* layanan dan *single-select* rentang *budget* yang berubah warna neon saat aktif.
  - Kartu informasi kontak (*Email, WhatsApp, Office Locations, Social Media*, dan *Office Hours*).

---

## Teknologi yang Digunakan

- **React + Vite** (Frontend Framework & Build Tool)
- **Tailwind CSS** (Utility-first CSS Framework)
- **SVG/ JPG / PNG Assets** (Optimized Client Logos & Infrastructure Mockups)

---

## Struktur Folder

```text
src/
├── assets/
├── components/
├── data/
├── page/
├── App.jsx
└── main.jsx

## Cara Menjalankan Project
```bash
npm install
npm run dev
```
Buka `http://localhost:5173` di browser.
