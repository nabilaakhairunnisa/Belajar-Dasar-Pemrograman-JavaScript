const {buatKartuATM, isiSaldo, beliPulsa} = require ('./utils');

async function kartuATM(contoh){
    try {
        //ini kayak buat variabel baru buat nyimpan hasil dari masing-masing fungsi.
        //misal variabel uang nyimpan hasil fungsi ambilUang
        const satu = await buatKartuATM(contoh);
        const dua = await isiSaldo(satu);
        const tiga = await beliPulsa(dua);
        //yang ini tempat buat naro nilai akhir dari fungsi bajuBaru......
        return tiga;
        //jika terjadi kesalahan dalam pemanggilang fungsi maka akan ditangkap di sini
    }catch(error){
        throw error;
    }
}

kartuATM(200)
    .then ((hasil)=>console.log(hasil))
    .catch((error)=>console.log(error.message));