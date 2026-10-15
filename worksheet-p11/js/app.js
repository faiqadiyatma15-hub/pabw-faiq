import { profil, daftarProyek } from "./data.js";
import { ambilNotisia } from "./api.js";
import {
  state,
  terapkanSimpanan,
  hubungkanRender
} from "./state.js";
import { render, tampilkanProfil } from "./dom.js";
import { pasangEvents } from "./events.js";

// P8: menampilkan informasi profil
const jumlahDestinasi = daftarProyek.length;

console.log(
  `Nama saya ${profil.nama ?? "Nama belum tersedia"}, dan saya memiliki ${profil.keahlian.length} keahlian.`
);

console.log(
  "Domisili:",
  profil.alamat?.kota ?? profil.domisili ?? "Kota belum tersedia"
);

console.log("Jumlah destinasi:", jumlahDestinasi);
console.log("Tipe jumlah destinasi:", typeof jumlahDestinasi);
console.log("Salinan profil:", { ...profil });

console.table(profil.keahlian);
console.table(daftarProyek);

console.log(
  "Hasil map:",
  daftarProyek.map((tempat) => tempat.judul)
);

console.table(
  daftarProyek.filter((tempat) => tempat.durasi >= 3)
);

console.table(
  daftarProyek.filter((tempat) => tempat.rating === 5)
);

console.log(
  "Hasil find:",
  daftarProyek.find(
    (tempat) => tempat.judul === "Pantai Kuta, Bali"
  )
);

console.table(
  [...daftarProyek].sort((a, b) => b.rating - a.rating)
);

console.log("Nilai email:", profil.email);

console.log(
  "Elemen yang dicari:",
  document.querySelector("#elemen-tidak-ada")
);

// P11: menghubungkan state dan tampilan
terapkanSimpanan();
hubungkanRender(render);
tampilkanProfil(profil);
render(state);
pasangEvents();

// P10: mengambil dan menampilkan data API
const wadahAPI = document.querySelector("#daftar-api");
const pesanAPI = document.querySelector("#pesan-api");

function tampilkanDaftarAPI(daftar) {
  if (!wadahAPI) {
    return;
  }

  wadahAPI.textContent = "";

  daftar.forEach((notisia) => {
    const kartu = document.createElement("article");
    const judul = document.createElement("h3");
    const isi = document.createElement("p");

    kartu.className = "kartu-api";
    judul.textContent = notisia.title;
    isi.textContent = notisia.body;

    kartu.append(judul, isi);
    wadahAPI.appendChild(kartu);
  });
}

async function tampilkanNotisia() {
  if (!pesanAPI || !wadahAPI) {
    return;
  }

  pesanAPI.textContent = "Memuat data...";
  wadahAPI.textContent = "";

  try {
    const daftar = await ambilNotisia();

    if (!daftar || daftar.length === 0) {
      pesanAPI.textContent = "Belum ada data.";
      return;
    }

    tampilkanDaftarAPI(daftar);
    pesanAPI.textContent = "Data berhasil dimuat.";
  } catch (galat) {
    pesanAPI.textContent = "Gagal memuat data API.";
    console.error("Kesalahan API:", galat);
  }
}

tampilkanNotisia();