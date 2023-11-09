//Kita bisa menyimpan function dalam variabel
//Memberikan function sebagai parameter pada fungsi lainnya
//Mengembalikan function di dalam function.

const hello = () => {
    console.log('Hello!')
  };
  
  const say = (someFunction) => {
    someFunction();
  }
  
  const sayHello = () => {
      return () => {
          console.log('Hello!');
      }
  }
  
  hello();
  say(hello);
  sayHello()();