const khodams = [
  "Air Cucian Beras", "Api neraka", "Ampas kopling", "Batu Karang", "Cahaya Senter", 
  "Daun Rimbun", "mimi peri", "Kembang Pasir", "Hujan Deras", "Kera Sakti", 
  "Pak Vincent", "Tanah Kubur", "Ayam Sakit", "Titid Terbang", "Layangan Putus", 
  "penunggu taman lawang", "Buaya Putih", "Kuntilanak Merah", "Pocong gila", "Tuyul Emas"
];

function checkKhodam() {
  const nameInput = document.getElementById('nameInput').value;
  if (nameInput.trim() === "") {
    alert("Tulis nama kamu di sini!");
    return;
  }
  const randomIndex = Math.floor(Math.random() * khodams.length);
  const khodam = khodams[randomIndex];
  document.getElementById('resultText').innerText = `Khodam yang ada di dalam diri kamu: ${khodam}`;
  document.getElementById('shareText').style.display = 'block';
  document.getElementById('retryButton').style.display = 'block'; // Menampilkan tombol Ulangi
}

function retry() {
  document.getElementById('nameInput').value = '';
  document.getElementById('resultText').innerText = '';
  document.getElementById('shareText').style.display = 'none';
  document.getElementById('retryButton').style.display = 'none'; // Menyembunyikan tombol Ulangi
}
