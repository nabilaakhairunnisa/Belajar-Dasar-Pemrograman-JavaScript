/*Promise layaknya janji dalam dunia nyata. 
Bisa ditepati dan tidak ditepati sesuai kondisi.
-pending: kondisi menunggu menyelesaikan tugasnya
-fulfilled: tugas selesai (then)
-rejected: kondisi gagal dilaksanakan (catch)

method dalam promise:
-resolve
-reject
*/

const { rejects } = require('assert');
const { resolve } = require('path');
const util=require('util');

function mendapatkanProvinsi(namaKota){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(namaKota==='id'){
        resolve([
          {id:'id-bgr', nama:'Bogor' },
          {id:'id-tgr', nama:'Tanggerang'},
          {id:'id-jkt', nama:'Jakarta'},
        ]);
      } else {
        reject(new Error('Kota tidak ditemukan'));
      }
    }, 2000);
  });
}

module.exports={mendapatkanProvinsi};