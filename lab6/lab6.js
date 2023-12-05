//1

let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
  ];
  //a
  // Function to add a book to the library
  function addBook(title, author, libraryID) {
    let newBook = { title, author, libraryID };
    libraryBooks.push(newBook);
    return newBook;
  }
  //b
  // Function to get all book titles in alphabetical order
  function getTitles() {
    let titles = libraryBooks.map(book => book.title);
    return titles.sort();
  }
  //c
  // Function to find books based on a title keyword
  function findBooks(keyword) {
    let matchingBooks = libraryBooks.filter(book => book.title.toLowerCase().includes(keyword.toLowerCase()));
    return matchingBooks.sort((a, b) => a.author.localeCompare(b.author));
  }
  
  // Example usage:
  console.log("Original library books:", libraryBooks);
  
  let newBook = addBook("New Book Title", "John Doe", 7890);
  console.log("Added book:", newBook);
  
  let sortedTitles = getTitles();
  console.log("Sorted titles:", sortedTitles);
  
  let keyword = "road";
  let foundBooks = findBooks(keyword);
  console.log(`Books with "${keyword}" in title:`, foundBooks);
  //2
  // Custom implementation of the map function
  function myMap(arr, fun) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      result.push(fun(arr[i], i, arr));
    }
  
    return result;
  }
  
  // Example usage of myMap
  let numbers = [1, 2, 3, 4, 5];
  
  // Define a function to square each element
  function square(x) {
    return x * x;
  }
  
  let squaredNumbers = myMap(numbers, square);
  console.log("Original numbers:", numbers);
  console.log("Squared numbers:", squaredNumbers);