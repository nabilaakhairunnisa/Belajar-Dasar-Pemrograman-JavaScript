//Globaly Scoped: variabel yang bisa diakses oleh seluruh script. Biasa didefinisikan di luar fungsi
//Locally Scoped: variabel yang hanya bisa diakses oleh fungsi tertentu. Biasa didefinisikan di dalam fungsi

function multiply(num) {
    total = num * num;
    return total;
}
let total = 9;
multiply(20);
console.log(total)

//Output dari kode program di atas adalah 400,
//kenapa 400? karena pada pemanggilan fungsi multiply,
//mengirimkan 20 untuk parameter num. 
//Lalu num dikalikan.

function multiply(num) {
    let total = num * num;
    return total;
}
total = 9;
multiply(20);
console.log(total)

//Jika ingin menampilkan output 9, 
//maka tingal tuliskan keyword let di dalam fungsi