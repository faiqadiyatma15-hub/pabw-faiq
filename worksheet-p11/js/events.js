import { pilihKategori, aturUlang } from "./state.js";

export function pasangEvents() {
  const barisFilter = document.querySelector("#filter");
  const tombolReset = document.querySelector("#tombol-reset-filter");
  const form = document.querySelector("#form-pengalaman");

  const tempat = document.querySelector("#tempat");
  const tanggal = document.querySelector("#tanggal");
  const rating = document.querySelector("#rating");
  const kesan = document.querySelector("#kesan");

  const tombolKirim = document.querySelector("#tombol-kirim");

  const errorTempat = document.querySelector("#error-tempat");
  const errorTanggal = document.querySelector("#error-tanggal");
  const errorRating = document.querySelector("#error-rating");
  const errorKesan = document.querySelector("#error-kesan");

  // Filter kategori
  barisFilter?.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");

    if (!tombol || !barisFilter.contains(tombol)) {
      return;
    }

    if (tombol.id === "tombol-reset-filter") {
      return;
    }

    pilihKategori(tombol.dataset.kategori);
  });

  // Reset filter
  tombolReset?.addEventListener("click", () => {
    aturUlang();
  });

  // Validasi form
  function periksaForm() {
    if (
      !tempat ||
      !tanggal ||
      !rating ||
      !kesan ||
      !errorTempat ||
      !errorTanggal ||
      !errorRating ||
      !errorKesan
    ) {
      return false;
    }

    const nilaiTempat = tempat.value.trim();
    const nilaiTanggal = tanggal.value.trim();
    const nilaiRating = rating.value.trim();
    const nilaiKesan = kesan.value.trim();

    let sah = true;

    errorTempat.textContent = "";
    errorTanggal.textContent = "";
    errorRating.textContent = "";
    errorKesan.textContent = "";

    [tempat, tanggal, rating, kesan].forEach((kolom) => {
      kolom.removeAttribute("aria-invalid");
    });

    if (nilaiTempat === "") {
      errorTempat.textContent = "Nama tempat wajib diisi.";
      tempat.setAttribute("aria-invalid", "true");
      sah = false;
    }

    if (nilaiTanggal === "") {
      errorTanggal.textContent = "Tanggal kunjungan wajib diisi.";
      tanggal.setAttribute("aria-invalid", "true");
      sah = false;
    }

    if (nilaiRating === "") {
      errorRating.textContent = "Pilih rating terlebih dahulu.";
      rating.setAttribute("aria-invalid", "true");
      sah = false;
    }

    if (nilaiKesan === "") {
      errorKesan.textContent = "Kesan dan pesan wajib diisi.";
      kesan.setAttribute("aria-invalid", "true");
      sah = false;
    }

    if (tombolKirim) {
      tombolKirim.disabled = !sah;
    }

    return sah;
  }

  // Periksa form saat kolom berubah
  [tempat, tanggal, rating, kesan].forEach((kolom) => {
    kolom?.addEventListener("input", periksaForm);
    kolom?.addEventListener("change", periksaForm);
  });

  // Proses pengiriman form
  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!periksaForm()) {
      const kolomPertama = [tempat, tanggal, rating, kesan].find(
        (kolom) =>
          kolom?.getAttribute("aria-invalid") === "true"
      );

      kolomPertama?.focus();
      return;
    }

    console.log("Form berhasil divalidasi.");

    form.reset();

    [errorTempat, errorTanggal, errorRating, errorKesan].forEach(
      (pesan) => {
        if (pesan) {
          pesan.textContent = "";
        }
      }
    );

    [tempat, tanggal, rating, kesan].forEach((kolom) => {
      kolom?.removeAttribute("aria-invalid");
    });

    if (tombolKirim) {
      tombolKirim.disabled = true;
    }
  });

  // Kondisi awal form
  periksaForm();
}