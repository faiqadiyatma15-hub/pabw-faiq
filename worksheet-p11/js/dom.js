import { buatPerkenalan, formatKeahlian } from "./data.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

// Elemen form
const form = document.querySelector("#form-pengalaman");
const tempat = document.querySelector("#tempat");
const tanggal = document.querySelector("#tanggal");
const rating = document.querySelector("#rating");
const kesan = document.querySelector("#kesan");
const tombolKirim = document.querySelector("#tombol-kirim");

// Pesan kesalahan form
const errorTempat = document.querySelector("#error-tempat");
const errorTanggal = document.querySelector("#error-tanggal");
const errorRating = document.querySelector("#error-rating");
const errorKesan = document.querySelector("#error-kesan");

// Membuat kartu destinasi
function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";

  const judul = document.createElement("h3");
  judul.textContent = proyek.judul;

  const tahun = document.createElement("p");
  tahun.textContent = `Tahun: ${proyek.tahun}`;

  const durasi = document.createElement("p");
  durasi.textContent = `Durasi: ${proyek.durasi} hari`;

  const ratingProyek = document.createElement("p");
  ratingProyek.textContent = `Rating: ${proyek.rating}/5`;

  li.append(judul, tahun, durasi, ratingProyek);

  return li;
}

// Menyaring destinasi berdasarkan kategori
export function saring(state) {
  if (state.kategoriAktif === "semua") {
    return state.daftarProyek;
  }

  return state.daftarProyek.filter(
    (proyek) => proyek.kategori === state.kategoriAktif
  );
}

// Menampilkan daftar destinasi
export function render(state) {
  if (!wadah || !kosong) {
    return;
  }

  wadah.textContent = "";

  const daftarTampil = saring(state);

  kosong.hidden = daftarTampil.length !== 0;

  daftarTampil.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });

  barisFilter?.querySelectorAll("button[data-kategori]").forEach(
    (tombol) => {
      tombol.classList.toggle(
        "aktif",
        tombol.dataset.kategori === state.kategoriAktif
      );
    }
  );
}

// Menampilkan informasi profil
export function tampilkanProfil(profil) {
  const perkenalan = document.querySelector("#perkenalan");
  const keahlian = document.querySelector("#keahlian");

  if (perkenalan) {
    perkenalan.textContent = buatPerkenalan(profil);
  }

  if (keahlian) {
    keahlian.textContent = formatKeahlian(profil.keahlian);
  }
}

// Mengambil elemen form
export function ambilElemenForm() {
  return {
    form,
    tempat,
    tanggal,
    rating,
    kesan,
    tombolKirim,
    errorTempat,
    errorTanggal,
    errorRating,
    errorKesan
  };
}