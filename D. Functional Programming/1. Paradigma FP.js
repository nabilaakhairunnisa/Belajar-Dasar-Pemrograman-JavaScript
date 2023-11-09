//Didasarkan pada fungsi matematika murni

//Gaya Imperatif (Perintah)

const Biodata = ['Nabila', 'Nada', 'Zikri'];
const newBiodata = [];
for (let i = 0; i < Biodata.length; i++) {
    newBiodata.push (`Halo ${Biodata [i]}`);
}
console.log(newBiodata);

//Gaya Deklaratif 
const Biodata = ['Nabila', 'Nada', 'Zikri'];
const newBiodata = Biodata.map ((biodata) => `Halo ${biodata}!`);
console.log (newBiodata);