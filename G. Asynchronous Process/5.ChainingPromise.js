const { resolve } = require("path");

function ambilUang (jumlah){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (jumlah > 100){
                reject(new Error('Kamu miskin'));
            }

            resolve(jumlah);
        }, 1000);
    });
}

function 