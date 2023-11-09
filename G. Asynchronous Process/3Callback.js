//Callback dipanggil ketika proses suatu fungsi dinyatakan selesai
//Jadi dia itu sebuah fungsi, tapi dimasukan ke dalam parameter dari fungsi lain.
//Fungsi callback biasanya ada di bawah fungsi lain yang memanggil dia sebagai parameter


function mendapatkanProvinsi (namaKota, callback){
  setTimeout(()=>{
    if(namaKota==='id'){
      callback(null, [
        {id:'id-bgr', nama:'Bogor' },
        {id:'id-tgr', nama:'Tanggerang'},
        {id:'id-jkt', nama:'Jakarta'},
      ]);
      return;
    }//tutup kurung kurawal if

    callback(new Error('Kota tidak ditemukan'), null);

  }, 2000);
}

module.exports = {mendapatkanProvinsi:mendapatkanProvinsi};



