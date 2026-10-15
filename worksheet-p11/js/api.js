const URL_API = "https://jsonplaceholder.typicode.com/posts?_limit=5";

// Mengambil data dari API
export async function ambilNotisia() {
  const respons = await fetch(URL_API);

  if (!respons.ok) {
    throw new Error(`Permintaan API gagal: ${respons.status}`);
  }

  const data = await respons.json();

  if (!Array.isArray(data)) {
    throw new Error("Format data API tidak sesuai.");
  }

  return data;
}