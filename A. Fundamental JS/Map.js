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