//node Try and Catch.js
//blok try berisi kode yang mau dicek kebenarannya
//blok catch buat menangani kode yang salah

C

//properti dari objek error ada name, massage dan stack
try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

//kalo salah satu baris kode ada yang error, maka fungsi catch akan dijalankan.

try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    console.log("Terjadi error!");  // (4)
}

//finally pasti dijalanin mau kodenya error atau enggak

try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
    console.log("Baris ini diabaikan");
} finally {
    console.log("Akan tetap dieksekusi");
}