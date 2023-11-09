//Superclass
class Pendidikan {
    constructor (sd, smp){
        this.sd = sd;
        this.smp = smp;
    }

    //Method
    sekolah () {
        console.log(`Kita sama-sama sekolah sd di ${this.sd} dan smp di ${this.smp}`);
    }
}

//Menaruh nilai ke dalam properti
const pendidikan = new Pendidikan ("arrahman", "necis");
console.log ("Menampilkan Properti Superclass:")
console.log (pendidikan);
console.log ("Method Utama:");
pendidikan.sekolah ();

//Subclass
class Nada extends Pendidikan {
    LulusKuliah (universitas, lokasiKampus) {
        this.sekolah(universitas, lokasiKampus);
    }
}

//Subclass
class Nabila extends Pendidikan {
    SedangKuliah (universitas, semester) {
        this.sekolah(universitas, semester);
    }
}

const nada = new Nada ('unindra', 'jakarta')
const nabila = new Nabila ('unpam', 4)

console.log("Menampilkan Subclass Nada")
nada.Nada ();
console.log("Menampilkan Subclass Nabila")
nada.Nabila ();





