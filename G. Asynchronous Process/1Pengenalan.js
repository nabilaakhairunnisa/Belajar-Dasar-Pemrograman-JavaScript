//Program asynchronous memungkinkan suatu proses berjalan sembari menunggu proses lainnya selesai. 
//Dalam asynchronous process, kita bisa menjalankan proses yang berada di baris kedua 
//tanpa harus menunggu kode pada baris pertama selesai dieksekusi. 

import { isPrime, random } from "./utils";

export function generatesPrimes(maximum) {
  const MAX_PRIME = 1000000;
    
  const primes = [];
    
  while (primes.length < maximum) {
    const candidate = random(MAX_PRIME);
    
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
    
  return primes;
}