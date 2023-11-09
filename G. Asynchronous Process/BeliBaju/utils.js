function buatKartuATM (uang){
    //ini syntax penggunaan promise, argumennya berisi arrow function yaitu resolve dan reject
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if (uang>100){
                console.log('Membeli Kartu ATM')
                resolve({kartuATM : true, saldo: 0})
                return;
            }
            reject(new Error('Gak cukup uang untuk bikin ATM'))
        }, 1000);
    });
}

function isiSaldo (kartu, total){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (kartu){
                console.log('Mengisi saldo ATM');
                resolve({...kartu, saldo: kartu.saldo + total})
            }
            reject (new Error('gak ada kartu, gimana mau isi saldo'))
        }, 1000);
    });
}

function beliPulsa (kartu){
    const hargaPulsa = 80;
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            if (kartu.saldo < hargaPulsa){
                reject(new Error('saldo tidak cukup'))
            }
            kartu.saldo -= hargaPulsa;
            console.log('Isi pulsa berhasil');
            resolve();
        }, 1000);
    });
}

module.exports = {buatKartuATM, isiSaldo, beliPulsa};