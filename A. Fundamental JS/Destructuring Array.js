//...Destructuring Array

const nilai = [90, 85, 70];
let nilai1 = 80;
let nilai2 = 60;
//Mengubah nilai suatu variabel yang berada di luar array menjadi nilai yang ada di dalam array
[nilai1, nilai2] = nilai; 
console.log(nilai2, nilai1);