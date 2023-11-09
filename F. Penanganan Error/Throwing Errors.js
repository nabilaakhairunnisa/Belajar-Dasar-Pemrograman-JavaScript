//node Throwing Errors.js
//JSON.parse untuk memparsing (menguraikan) string menjadi objek

let bio = '{ "name": "Nabila", "age": 20 }';
try {
    let user = JSON.parse(bio);
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

//buat variabel SyntaxError yang berisi pesan yang nantinya akan di kirim ke catch

let json = '{ "age": 20 }';
 
try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}

//Coba buat baris kode yang salah, hasil outputnya bakal kayak gini:
//JSON Error: errorCode is not defined

let contoh = '{ "name": "Yoda", "age": 20 }';
 
try {
    let user = JSON.parse(contoh);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    errorCode;
 
    console.log(user.name); // Yoda
    console.log(user.age);  // 20
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}