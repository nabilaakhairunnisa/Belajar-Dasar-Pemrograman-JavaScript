//Jadi ini tuh kayak manggil satu persatu isi array dengan menambahkan kata sebelumnya gitu

//Cara Imperatif
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
for(let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}!`);
}

//Cara Deklaratif
const nama = ['Nabila', 'Zikri', 'Nada', 'Zafira'];
 
nama.forEach((nama) => {
  console.log(`Hai, ${nama} cantik!`);
});