import { daftarProyek } from "./data.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

const KATEGORI_VALID = ["semua", "web", "data"];

export const state = {
  daftarProyek: [...daftarProyek],
  kategoriAktif: "semua"
};

let fungsiRender = () => {};

// Menghubungkan state dengan fungsi render
export function hubungkanRender(callback) {
  fungsiRender = callback;
}

// Memilih kategori filter
export function pilihKategori(nilai) {
  if (!KATEGORI_VALID.includes(nilai)) {
    return;
  }

  state.kategoriAktif = nilai;

  simpan(state);
  fungsiRender(state);
}

// Menyimpan pilihan filter
export function simpan(stateSaatIni) {
  const isi = {
    versi: VERSI,
    kategoriAktif: stateSaatIni.kategoriAktif
  };

  try {
    localStorage.setItem(KUNCI, JSON.stringify(isi));
  } catch (galat) {
    console.error("Gagal menyimpan pilihan:", galat);
  }
}

// Memuat pilihan filter
export function muat() {
  try {
    const teks = localStorage.getItem(KUNCI);

    if (teks === null) {
      return null;
    }

    const isi = JSON.parse(teks);

    if (
      !isi ||
      isi.versi !== VERSI ||
      !KATEGORI_VALID.includes(isi.kategoriAktif)
    ) {
      localStorage.removeItem(KUNCI);
      return null;
    }

    return isi;
  } catch (galat) {
    try {
      localStorage.removeItem(KUNCI);
    } catch {
      // Penyimpanan mungkin tidak tersedia.
    }

    return null;
  }
}

// Mengatur ulang filter
export function aturUlang() {
  try {
    localStorage.removeItem(KUNCI);
  } catch (galat) {
    console.error("Gagal menghapus pilihan:", galat);
  }

  state.kategoriAktif = "semua";

  fungsiRender(state);
}

// Menerapkan pilihan yang tersimpan
export function terapkanSimpanan() {
  const isi = muat();

  state.kategoriAktif =
    isi && KATEGORI_VALID.includes(isi.kategoriAktif)
      ? isi.kategoriAktif
      : "semua";
}