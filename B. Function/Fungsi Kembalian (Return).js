//Fungsi tanpa kembalian (return)
//Hasil perhitungan berada di fusngsi parameter
function penjumlahan (a,b){
    console.log("A + B = ",a+b); 
}
penjumlahan (1, 2);


//Fungsi dengan kembalian (return)
//Hasil perhitungan ada di fungsi argumen
//Namun, proses perhitungan atau rumus tetap di fungsi parameter
//Intinya console.log berada di fungsi argumen, dan
///return berada di fungsi parameter
function penjumlahan (a,b){
   return a + b;
}
let hasil = penjumlahan (1, 2)
console.log("A + B =", hasil)

//Contoh fungsi return lain
function namaLengkap (namaDepan, namaBelakang){
    return namaDepan + " " + namaBelakang;
} 
let namaLengkapKu = namaLengkap ("Nabila", "Khairunnisa");
console.log(namaLengkapKu);
