//Menghasilkan nilai boolean
//Jika salah satu isi array masuk klasifikasi, maka semuanya lolos/bernilai true

const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);
console.log(even);