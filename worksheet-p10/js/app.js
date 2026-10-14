
import { ambilNotisia } from './api.js';

const wadahAPI = document.querySelector('#daftar-api');
const pesanAPI = document.querySelector('#pesan-api');

function tampilkanDaftar(daftar) {
  wadahAPI.textContent = '';

  daftar.forEach(function (notisia) {
    const kartu = document.createElement('article');
    const judul = document.createElement('h3');
    const isi = document.createElement('p');

    kartu.className = 'kartu-api';
    judul.textContent = notisia.title;
    isi.textContent = notisia.body;

    kartu.appendChild(judul);
    kartu.appendChild(isi);
    wadahAPI.appendChild(kartu);
  });
}

async function tampilkanNotisia() {
  pesanAPI.textContent = 'Memuat data...';
  wadahAPI.textContent = '';

  try {
    const daftar = await ambilNotisia();

    if (daftar.length === 0) {
      pesanAPI.textContent = 'Belum ada data.';
      return;
    }

    tampilkanDaftar(daftar);
    pesanAPI.textContent = 'Data berhasil dimuat.';
  } catch (galat) {
    pesanAPI.textContent =
      'Gagal memuat data: ' + galat.message;
    console.error(galat);
  }
}

if (wadahAPI && pesanAPI) {
  tampilkanNotisia();
} else {
  console.error(
    'Elemen #daftar-api atau #pesan-api tidak ditemukan di profil.html.'
  );
}
