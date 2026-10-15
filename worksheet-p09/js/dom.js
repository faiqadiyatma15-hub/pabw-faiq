import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong = document.querySelector("#pesan-kosong");

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

  li.append(
    judul,
    tahun,
    durasi,
    ratingProyek
  );

  return li;
}

function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  daftar.forEach((proyek) => {
    wadah.append(
      buatKartu(proyek)
    );
  });
}

function tandaiTombolAktif(tombolAktif) {
  document
    .querySelectorAll("#filter button")
    .forEach((tombol) => {
      tombol.classList.toggle(
        "aktif",
        tombol === tombolAktif
      );
    });
}

barisFilter.addEventListener(
  "click",
  (event) => {
    const tombol =
      event.target.closest("button");

    if (!tombol) {
      return;
    }

    const kategori =
      tombol.dataset.kategori;

    const terpilih =
      daftarProyek.filter(
        (proyek) =>
          kategori === "semua" ||
          proyek.kategori === kategori
      );

    render(terpilih);

    tandaiTombolAktif(tombol);
  }
);

function periksaForm() {
  const nilaiTempat =
    tempat.value.trim();

  const nilaiTanggal =
    tanggal.value.trim();

  const nilaiRating =
    rating.value.trim();

  const nilaiKesan =
    kesan.value.trim();

  let sah = true;

  errorTempat.textContent = "";
  errorTanggal.textContent = "";
  errorRating.textContent = "";
  errorKesan.textContent = "";

  tempat.removeAttribute(
    "aria-invalid"
  );

  tanggal.removeAttribute(
    "aria-invalid"
  );

  rating.removeAttribute(
    "aria-invalid"
  );

  kesan.removeAttribute(
    "aria-invalid"
  );

  if (nilaiTempat === "") {
    errorTempat.textContent =
      "Nama tempat wajib diisi.";

    tempat.setAttribute(
      "aria-invalid",
      "true"
    );

    sah = false;
  }

  if (nilaiTanggal === "") {
    errorTanggal.textContent =
      "Tanggal kunjungan wajib diisi.";

    tanggal.setAttribute(
      "aria-invalid",
      "true"
    );

    sah = false;
  }

  if (nilaiRating === "") {
    errorRating.textContent =
      "Pilih rating terlebih dahulu.";

    rating.setAttribute(
      "aria-invalid",
      "true"
    );

    sah = false;
  }

  if (nilaiKesan === "") {
    errorKesan.textContent =
      "Kesan dan pesan wajib diisi.";

    kesan.setAttribute(
      "aria-invalid",
      "true"
    );

    sah = false;
  }

  tombolKirim.disabled = !sah;

  return sah;
}

[
  tempat,
  tanggal,
  rating,
  kesan
].forEach((kolom) => {
  kolom.addEventListener(
    "input",
    periksaForm
  );

  kolom.addEventListener(
    "change",
    periksaForm
  );
});

form.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    if (!periksaForm()) {
      const kolomPertama = [
        tempat,
        tanggal,
        rating,
        kesan
      ].find(
        (kolom) =>
          kolom.getAttribute(
            "aria-invalid"
          ) === "true"
      );

      kolomPertama?.focus();

      return;
    }

    console.log(
      "Form berhasil divalidasi."
    );

    form.reset();

    errorTempat.textContent = "";
    errorTanggal.textContent = "";
    errorRating.textContent = "";
    errorKesan.textContent = "";

    tombolKirim.disabled = true;
  }
);

render(daftarProyek);

periksaForm();