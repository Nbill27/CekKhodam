function checkKhodam() {
    var name = document.getElementById('nameInput').value;
    var resultText = document.getElementById('resultText');
    var retryButton = document.getElementById('retryButton');

    var khodams = [
        "Air Cucian Beras", "Api Menyala", "Kuda Nil", "Batu Karang", "Cahaya Bulan",
        "Daun Rimbun", "Rante supra", "Gurun Pasir", "Hujan Deras", "",
        "Sungai Mengalir", "Tanah Subur", "Sepeda Ontel", "Sapu Terbang", "Layangan Putus",
        "Baju Robek", "Buaya Putih", "Kuntilanak Merah", "Pocong Bambu", "Tuyul Emas"
    ];

    if (name) {
        var randomKhodam = khodams[Math.floor(Math.random() * khodams.length)];
        resultText.innerHTML = `Khodam yang ada di dalam diri <b>${name}</b>: <br><span style="font-size: 24px;">${randomKhodam}</span><br>Jangan lupa share ke yang lain agar mereka tahu sosok asli yang ada di dalam diri kamu`;
        retryButton.style.display = 'inline-block';
    } else {
        resultText.innerHTML = 'Mohon masukkan nama kamu.';
    }
}

function retry() {
    document.getElementById('nameInput').value = '';
    document.getElementById('resultText').innerHTML = '';
    document.getElementById('retryButton').style.display = 'none';
}
