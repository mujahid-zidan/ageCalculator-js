let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function hitungUmur() {
    let hariLahirUser = new Date(userInput.value);

    let hariLahir= hariLahirUser.getDate()
    let bulanLahir = hariLahirUser.getMonth() + 1
    let tahunLahir = hariLahirUser.getFullYear()

    let hariIni = new Date()
    // nilai hari sekarang
    
    let hariSekarang = hariIni.getDate()
    let bulanSekarang = hariIni.getMonth() + 1
    let tahunSekarang = hariIni.getFullYear()

    let umurTahun, umurBulan, umurHari;

    umurTahun = tahunSekarang - tahunLahir
    if( bulanSekarang >= bulanLahir){
        umurBulan = bulanSekarang - bulanLahir
    } else {
        umurTahun--;
        umurBulan = 12 + bulanSekarang - bulanLahir
    }

    if (hariSekarang >= hariLahir){
        umurHari = hariSekarang - hariLahir
    } else {
        umurBulan--;
        umurHari = getDaysInMonth(tahunLahir, bulanLahir) + hariSekarang - hariLahir
    }

    if(umurBulan < 0){
        umurBulan = 11
        umurTahun--;
    }

    result.innerHTML = `Umur anda adalah <span>${umurTahun}</span> tahun <span>${umurBulan}</span> bulan <span>${umurHari}</span> hari`;
    console.log(umurTahun, umurBulan, umurHari);
}
function getDaysInMonth(year, month) {
     return new Date(year, month, 0).getDate();
}

