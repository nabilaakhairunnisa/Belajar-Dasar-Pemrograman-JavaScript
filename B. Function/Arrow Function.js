//name pada baris pertama adalah parameter, 
// karena hanya memiliki satu parameter, 
// maka tanda kurungnya dihapus.
// sayName("Leila") adalah fungsi sayName yang punya parameter "Leila", 
// yang dikirim ke fungsi tsb.

const sayName = name => {
    console.log(`Nama saya ${name}`)
}
sayName("Leia");


//tapi kalo gak ada parameternya, tetep harus pake tanda kurung kayak gini;
const sapaan = () => {
    console.log("Selamat Pagi")
    console.log("Selamat beraktivitas!")
}
sapaan ();

//nah, kalo ini misal isi bodynya cuma satu baris, maka gak usah pake kurawal.
const perkalian = (a, b) => a * b; //body hanya berisi perkalian,
console.log(perkalian(3, 2)) //console.log, memanggil fungsi, dan mengirim parameter



