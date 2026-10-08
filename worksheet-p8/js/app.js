const profil = {
  nama: "Faiq Adiyatma Prakosa",
  nim: "25523088",
  peran: "Mahasiswa Teknik Informatika",
  jurusan: "Teknik Informatika",
  semester: 3,
  domisili: "Indonesia",
  keahlian: [
    "HTML",
    "CSS",
    "JavaScript"
  ]
};

const destinasi = [
  {
    nama: "Pantai Kuta, Bali",
    tahun: 2023,
    durasi: 4,
    rating: 5
  },
  {
    nama: "Candi Borobudur, Magelang",
    tahun: 2024,
    durasi: 3,
    rating: 4
  },
  {
    nama: "Gunung Bromo, Jawa Timur",
    tahun: 2025,
    durasi: 2,
    rating: 5
  }
];

const jumlahDestinasi = destinasi.length;

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => {
  return daftar.join(" · ");
};

const namaTampilan = profil.nama ?? "Nama belum tersedia";

const kota = profil.alamat?.kota ?? "Kota belum tersedia";

const kalimat = `Nama saya ${namaTampilan}, dan saya memiliki ${profil.keahlian.length} keahlian.`;

console.log(kalimat);

console.log("Perkenalan:");
console.log(buatPerkenalan(profil));

console.log("Keahlian:");
console.log(formatKeahlian(profil.keahlian));

console.log(`Domisili: ${kota}`);

console.log(`Jumlah destinasi: ${jumlahDestinasi}`);

console.log(`Tipe jumlah destinasi: ${typeof jumlahDestinasi}`);

const salinanProfil = { ...profil };

console.log("Salinan profil:");
console.log(salinanProfil);

console.log("Daftar keahlian:");
console.table(profil.keahlian);

console.log("Daftar destinasi:");
console.table(destinasi);

const namaDestinasi = destinasi.map(
  (tempat) => tempat.nama
);

console.log("Hasil map:");
console.log(namaDestinasi);

const liburanLama = destinasi.filter(
  (tempat) => tempat.durasi >= 3
);

console.log("Hasil filter durasi minimal 3 hari:");
console.table(liburanLama);

const ratingBagus = destinasi.filter(
  (tempat) => tempat.rating === 5
);

console.log("Hasil filter rating 5:");
console.table(ratingBagus);

const destinasiBali = destinasi.find(
  (tempat) => tempat.nama === "Pantai Kuta, Bali"
);

console.log("Hasil find:");
console.log(destinasiBali);

const destinasiUrut = [...destinasi].sort(
  (a, b) => b.rating - a.rating
);

console.log("Data setelah sort:");
console.table(destinasiUrut);

console.log("Data asli setelah sort:");
console.table(destinasi);

const dataTidakAda = profil.email;

console.log("Nilai email:");
console.log(dataTidakAda);

const elemenTidakAda = document.querySelector(
  "#elemen-tidak-ada"
);

console.log("Elemen yang dicari:");
console.log(elemenTidakAda);

const ratingInput = document.querySelector("#rating");

console.log("Nilai rating:");
console.log(ratingInput.value);

console.log("Tipe nilai rating:");
console.log(typeof ratingInput.value);

if (ratingInput.value === 5) {
  console.log("Rating adalah angka 5");
} else {
  console.log("Rating belum berupa angka 5");
}

const ratingAngka = Number(ratingInput.value);

if (ratingAngka === 5) {
  console.log("Rating setelah dikonversi adalah angka 5");
}