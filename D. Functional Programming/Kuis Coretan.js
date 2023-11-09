// class Books {
//   constructor(title, author, sales){
//     this.title = title;
//     this.author = author;
//     this.sales = sales;
//   }
// }

// const book1 = new Books ('The Da Vinci Code', 'Dan Brown', 5094805);
// const book2 = new Books ('The Ghost', 'Robert Harris', 807311);

// const greatAuthors = [book1, book2].filter((isi) => Boolean(isi > 1000000));
// console.log(greatAuthors);

// console.log(book1);

//......................................

// const book1 = {title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 };
// const book2 = {title: 'The Ghost', author: 'Robert Harris', sales: 807311 };

// const books = [book1, book2];

// const greatAuthors = [book1.sales, book2.sales].filter((isi) => Boolean(isi > 1000000));

// console.log(books);

//.......................................

const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
  ];

const greatAuthors = books.filter((isi) => (isi>1000000))
console.log(greatAuthors);