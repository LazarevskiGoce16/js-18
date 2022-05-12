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

const generateBookList = () => {
  const container = document.getElementById('content')
  const list = document.createElement('ul')
  container.appendChild(list)

  for (const book of books) {
    const listItem = document.createElement('li')
    listItem.textContent = `${book.name} (${book.year}) by ${book.author}`
    list.appendChild(listItem)
  }
}

generateBookList()