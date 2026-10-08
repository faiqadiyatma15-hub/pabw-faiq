# PABW — Faiq Adiyatma Prakosa — 25523088

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web, satu folder untuk setiap pertemuan.

## Pertemuan 3 — Halaman profil saya

Topik halaman saya: catatan jurnal liburan saya.

- Judul halaman: Jurnal Liburan Saya
- Deskripsi: catatan riwayat perjalanan liburan, destinasi favorit, serta form untuk menambahkan pengalaman liburan baru
- Tautan navigasi: Destinasi Liburan, Foto Kenangan, Tambah Pengalaman
- Dua bagian utama: Riwayat & Destinasi Liburan, Tambah Pengalaman Baru
- Kolom tabel: destinasi, tahun, lama liburan, kesan utama
- Kolom form: nama tempat, tanggal kunjungan, rating pengalaman, kesan & pesan
- Gambar: liburan.webp

## Pertemuan 4 — Design token halaman profil

- Berkas gaya yang dibuat: `tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`
- Warna utama: `#4C1D95` (ungu), dipilih karena memberikan kontras tinggi, kesan modern, dan tampilan visual yang elegan.

### Token yang ditetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| `--color-primary` | `#4C1D95` | Tombol, tautan, penanda |
| `--color-fg` | `#0F172A` | Warna teks utama |
| `--color-bg` | `#F8FAFC` | Latar halaman |
| `--radius-md` | `0.5rem` | Sudut tombol, input, dan kartu |
| `--space-4` | `1rem` | Jarak standar (padding & gap) antar elemen |

Kriteria selesai: mengubah `--color-primary` di satu baris `tokens.css` harus mengubah warna tombol, tautan, judul, dan garis fokus di seluruh halaman.

## Pertemuan 5 — Layout Modern: Flexbox dan Grid

- Struktur halaman menggunakan CSS Grid untuk kerangka utama.
- Komponen dan navigasi menggunakan Flexbox.
- Jarak antar elemen menggunakan `gap`.
- Galeri menggunakan Grid agar jumlah kolom dapat menyesuaikan lebar layar.
- Layout diperiksa pada lebar 360 px dan 1280 px agar tidak meluber.

## Pertemuan 6 — Responsif dan Penyempurnaan Halaman

- Halaman menggunakan layout responsif untuk beberapa ukuran layar.
- Tampilan diperiksa pada ukuran 360 px, 768 px, dan 1280 px.
- Elemen halaman disesuaikan agar tetap terbaca dan tidak keluar dari area layar.
- Halaman tetap menggunakan tema dan komponen dari pertemuan sebelumnya.

## Pertemuan 8 — JavaScript Modern ES6+

- Menambahkan folder `js/` dan berkas `app.js`.
- Data profil dipindahkan ke JavaScript menggunakan `const`.
- Menggunakan template literal, `??`, dan optional chaining `?.`.
- Membuat fungsi untuk perkenalan dan pemformatan keahlian.
- Menggunakan array of object untuk data destinasi.
- Menggunakan `map`, `filter`, dan `find`.
- Menggunakan `console.table()` untuk melihat data.
- Menggunakan spread syntax untuk menyalin object dan array sebelum perubahan.
- Melakukan pengecekan `undefined`, `null`, dan tipe data nilai input.
- Halaman dijalankan melalui server lokal menggunakan Live Server.

### Pengungkapan Penggunaan AI

Pada Pertemuan 8, saya menggunakan AI sebagai alat bantu untuk memahami materi JavaScript Modern ES6+, memeriksa struktur kode, dan membantu menemukan kesalahan saat pengerjaan.

Kode yang digunakan tetap saya sesuaikan dengan hasil pekerjaan dan struktur halaman yang saya buat sendiri.