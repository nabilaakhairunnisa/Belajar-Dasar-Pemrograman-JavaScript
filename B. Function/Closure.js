//Lexical Scope: fungsi bersarang
//Closure: fungsi yang dapat mengakses variabel di dalam lexical scope.
//Closure itu kayak fungsi turunan atau fungsi yang berada dalam fungsi lain.

function init() {
    var name = 'Obi Wan';               // Variabel lokal di dalam scope fungsi init. Variabel ini bisa digunakan di fungsi greet
    
    function greet() {                  // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function (lexical scope)
    }
    greet(); //memanggil fungsi greet, yang mana menghasilkan output "Halo, Obi Wan"
}
init(); //memanggil fungsi init


function init() {
    var name = 'Obi Wan';

    function greet() {
        console.log(`Halo, ${name}`);
    }
    return greet; //kalo pake return seharusnya tidak menghasilkan apa-apa
}
let myFunction = init(); //tapi sekarang kita simpan fungsi init dan isinya (var name) di var baru yaitu myFunction
myFunction();

//Sekarang kita coba pake arrow function
let add = () => { //seperti biasa kalau aarow function itu keywordnya bukan function lagi, melainkan let/const
    let counter = 10; //ini variabel local
    return () => {
        return ++counter;
    };
}

let addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());
