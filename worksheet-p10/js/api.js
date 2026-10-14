
const ALAMAT = 'https://jsonplaceholder.typicode.com/posts';

export async function ambilNotisia() {
  try {
    const respons = await fetch(ALAMAT);

    console.log('Status:', respons.status);
    console.log('Berhasil:', respons.ok);

    if (!respons.ok) {
      throw new Error(
        'Gagal mengambil data. Status: ' + respons.status
      );
    }

    const data = await respons.json();

    if (!Array.isArray(data)) {
      throw new Error('Format data tidak sesuai.');
    }

    return data;
  } catch (galat) {
    console.error('Gagal mengambil data:', galat.message);
    throw galat;
  }
}
