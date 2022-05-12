const books = [
  {
    name: 'Crime and punishment',
    author: 'Fyodor Dostoyevsky',
    year: 1887,
    read: true
  },
  {
    name: 'Harry Potter',
    author: 'J.K Rowling',
    year: 2000,
    read: false
  },
  {
    name: 'Cloud Atlas',
    author: 'George Mitchell',
    year: 2004,
    read: false
  },
  {
    name: 'The art of war',
    author: 'Sun Tzu',
    year: 200,
    read: false
  },
  {
    name: 'The Hobbit',
    author: 'J.R.R Tolkien',
    year: 1910,
    read: true
  }
]


const displayBooks = (isRead) => { // function displayBooks () {}
    generateHTMLList(books.filter((book) => book.read === isRead ? true : false )) // implcit return
    // dokolku samo imate edna linija return statement, ne mora da psivate golemi zagradi kaj funkcijata
    // i ne mora da pisuvate return
}


function filterBooksByYear () {
  // immutability concept
  const filteredBooks = books.filter((book) => {
    // callback fnction (predicate)
    // vo call back funkcijata definirame uslov
    // filter ja izminuva celata niza i za sekoj element proveruva dali go zadovoluva uslovot
    // site elementi sto go zadovoluvaat uslovot i vrakja vo noviot array (filteredBooks)
    if (book.year < 2000) {
      return true
    }
    return false
  })

  generateHTMLList(filteredBooks)
}


function generateHTMLList (arrayOfBooks) {
  const content = document.getElementById('content')
  let list = document.getElementById('list')
  if (list) {
    list.remove()
  }

  list = document.createElement('ul')
  list.id = 'list' // list.setAttribute('id', 'list')
  list.style = "padding: 0px; list-style-type: none"
  content.appendChild(list)

  for (const book of arrayOfBooks) {
    const listItem = document.createElement('li')
    listItem.textContent = `${book.name} (${book.year}) - ${book.author}`
    list.append(listItem)
  }
}



// const modifiedBooks = books.map((book, index) => {
//   if (book.year === 2000) {
//     return { ...book, id: index + 1, read: true }
//   }

//   return { ...book, id: index + 1}
// })

// console.log(modifiedBooks)