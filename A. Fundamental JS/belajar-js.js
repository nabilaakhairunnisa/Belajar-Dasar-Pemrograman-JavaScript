//...Kuis Variabel 

let firstName   = "Nabila";
let lastName    = "Khairunnisa";
let age         = 20;
let isMarried   = false;

console.log(`firstName  = ${firstName}`);
console.log(`lastName   = ${lastName}`);
console.log(`age        = ${age}`);
console.log(`isMarried  = ${isMarried}`);

//...Kuis Logika If
 function scoreChecker(score) {
    let result;
 } 
let score = 90;   
if (score >= 90){
        result = 'Selamat! Anda mendapatkan nilai A.';
    }
    else if (score >= 80){
        result = 'Anda mendapatkan nilai B.';
    }
    else if (score >= 70){
        result = 'Anda mendapatkan nilai C.';
    }
    else if (score >= 60){
        result = 'Anda mendapatkan nilai D.';
    }
    else if (score < 60){
        result = 'Anda mendapatkan nilai E.';
    }

    console.log(result);

//...Destructuring Array

const nilai = [90, 85, 70];
let nilai1 = 80;
let nilai2 = 60;
//Mengubah nilai suatu variabel yang berada di luar array menjadi nilai yang ada di dalam array
[nilai1, nilai2] = nilai; 
console.log(nilai2, nilai1);

//...Map

// Merupakan kumpulan beberapa array 
// Yang dalam satu array mempunyai 2 buah elemen
// Dimana elemen pertama merupakan key dan elemen kedua merupakan value
    const Biodata = new Map ([
        ["nama", 'Nabila'],
        ["umur", 20],
        ["pendidikan","SMA"]
        ]);

    console.log(Biodata);
    //untuk mengetahui ukuran array yang ada pada Map
    console.log("ukuran array : ", Biodata.size);
    
    //untuk melihat value 
    console.log("age : ",Biodata.get("umur"));
   
    //untuk menambahkan array
    Biodata.set("pacaran?", false);
   
    //ukuran array setelah ditambahkan
    console.log("ukuran array sekarang: ", Biodata.size);
    
    // Melihat value yang baru ditambahakan :
    // Yang dipanggil harus elemen pertama (key)
    // Nanti dia akan mengeluarkan value
    // Kalo yang dipanggil elemen kedua (value) 
    // Nanti dia akan mengeluarkan "undefinied".
    console.log("Punya pacar?", Biodata.get("pacaran?"));

//...Function

//Parameter, berupa variabel
function biodata (bb, umur){
    console.log("Berat badan    : ", bb);
    console.log("Umur           : ", umur);
}
//Argumen, berupa nilai yang dikirimkan ke parameter
biodata (47, 20);

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

//Expression Function
//Fungsi yang tidak perlu menuliskan nama fungsinya 
//Anonymous Function
const Halo = function (bahasa, nama){
    if (bahasa == "Indonesia"){
        return "Hai," + nama;
    }
    else if (bahasa == "Korea"){
        return "Annyeong," + nama;
    }
}
console.log(Halo("Indonesia", "Zikri"));