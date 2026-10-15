// Data profil
export const profil = {
  nama: "Faiq Adiyatma Prakosa",
  nim: "25523088",
  jurusan: "Teknik Informatika",
  semester: 3,
  domisili: "Indonesia",
  alamat: {
    kota: "Surakarta"
  },
  email: "faiq@example.com",
  keahlian: ["HTML", "CSS", "JavaScript"]
};

// Data destinasi dan proyek
export const daftarProyek = [
  {
    judul: "Pantai Kuta, Bali",
    tahun: 2023,
    durasi: 4,
    rating: 5,
    kategori: "web"
  },
  {
    judul: "Candi Borobudur, Magelang",
    tahun: 2024,
    durasi: 3,
    rating: 4,
    kategori: "data"
  },
  {
    judul: "Gunung Bromo, Jawa Timur",
    tahun: 2025,
    durasi: 2,
    rating: 5,
    kategori: "web"
  }
];

// Membuat teks perkenalan
export function buatPerkenalan(data) {
  return `Halo, saya ${data.nama}, mahasiswa ${data.jurusan}.`;
}

// Menggabungkan daftar keahlian
export function formatKeahlian(daftar) {
  return daftar.join(", ");
}