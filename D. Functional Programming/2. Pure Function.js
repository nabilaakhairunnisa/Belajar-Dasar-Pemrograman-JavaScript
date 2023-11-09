//...Pure Function
//Tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya.

const hitungKelilingLingkaran = (diameter) => {
    return 3.14 * diameter;
}

console.log(hitungKelilingLingkaran(10));

//Contoh Lain Menggunakan Destructuring Object

const createPersonWithAge = (age, person) => {
    return { ...person, age };
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const newPerson = createPersonWithAge(18, person);
  
  console.log({
    person,
    newPerson
  });

