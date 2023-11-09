//Penyaringan, misal mau ngebuang beberapa isi array dengan spesifikasi tertentu
//Pake return boolean, untuk menentukan lolos saring atau tidak

const contoh = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((isi) => Boolean(isi));
console.log(contoh);

//output:
//[ 1, 'Hallo', 'Harry', 14 ]
//yang keluar cuma yang bernilai aja, kayak null dan 0 gak lolos penyaringan.

const nilai = new Map ([
    ['Nabila', 100],
    ['Zikri', 99],
]);

const syaratBeasiswa = siswa.filter((siswa) => siswa.allSiswa > 80);
console.log(syaratBeasiswa);