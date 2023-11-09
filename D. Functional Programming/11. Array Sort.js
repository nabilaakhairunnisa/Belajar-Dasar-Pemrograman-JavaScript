// Pengurutan secara ascending berdasarkan tipe data string


//Nah kalo yang ini membandingkan 2 nilai yang menghasilkan 3 result yaitu negatif, nol, dan positif. 

const array = [1, 30, 4, 1000];

const membandingkanNomor = (k, l) => {
  return k - l;
};
const sorting = array.sort(membandingkanNomor);
console.log(sorting);