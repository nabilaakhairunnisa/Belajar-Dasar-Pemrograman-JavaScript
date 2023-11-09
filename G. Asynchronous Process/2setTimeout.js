//Merupakan fungsi untuk menjadwalkan pemanggilan kode sekaligus membuatnya berjalan secara asynchronous

console.log('Selamat datang!');
 
setTimeout(() => {
  console.log('Terima kasih sudah mampir, silakan datang kembali!');
}, 3000)
 
console.log('Ada yang bisa dibantu?');

//coba-coba
console.log('Halo');
setTimeout(() => {
  console.log('ini bagian yang akan ditampilkan lebih dulu');
}, 3000)
console.log('ini bagian yang akan ditampilkan belakangan');