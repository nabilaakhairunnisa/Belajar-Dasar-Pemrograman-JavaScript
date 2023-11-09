//Expression Function: fungsi yang tidak perlu menuliskan nama fungsinya atau Anonymous Function

const Halo = function (bahasa, nama){
    if (bahasa == "Indonesia"){
        return "Hai, " + nama;
    }
    else if (bahasa == "Korea"){
        return "Annyeong," + nama;
    }
}
console.log(Halo("Indonesia", "Zikri"));