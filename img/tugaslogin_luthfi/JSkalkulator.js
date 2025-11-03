let angka1 = document.getElementById ("angka1");
let angka2 = document.getElementById ("angka2");
let penjumlahan = document.getElementById ("penjumlahan");
let pengurangan = document.getElementById ("pengurangan");
let perkalian= document.getElementById ("perkalian");
let pembagian= document.getElementById ("pembagian");
let textHasil = document.getElementById("hasil");


function tambah () {
    let a = parseInt(angka1.value)
    let b = parseInt(angka2.value)

    let hasil = a+b;
    textHasil.innerHTML = "Hasil : " + hasil;
}
penjumlahan.onclick = tambah;

function kurang () {
    let a = parseInt(angka1.value)
    let b = parseInt(angka2.value)

    let hasil = a-b;
    textHasil.innerHTML = "Hasil : " + hasil;
}
pengurangan.onclick = kurang;

function kali () {
    let a = parseInt(angka1.value)
    let b = parseInt(angka2.value)

    let hasil = a*b;
    textHasil.innerHTML = "Hasil : " + hasil;
}
perkalian.onclick = kali;

function bagi () {
    let a = parseInt(angka1.value)
    let b = parseInt(angka2.value)

    let hasil = a/b;
    textHasil.innerHTML = "Hasil : " + hasil;
}
pembagian.onclick = bagi;