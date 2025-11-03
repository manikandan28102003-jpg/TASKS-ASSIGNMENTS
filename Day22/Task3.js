
const book = {
   title:"Fire and Ice",
    author:"Robert frost",
    pages:18,
  
  describe() {
    console.log(`"${this.title}" by ${this.author}, ${this.pages} pages.`);
  }
};


book.describe();


const { title, author } = book;

console.log(`Title: ${title}`);
console.log(`Author: ${author}`);