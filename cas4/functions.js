// deklaracija
function helloWorld (parameter1, paramter2) {
  // funkciite primaat parametri kako promenlivi definirani vo malite zagradi
  // function body (telo na funkcijata, go sodrzi kodot)
  const zbir = parameter1 + paramter2
  // alert(zbir);
  // alert("Hello world!")
  
  return zbir
}


// povik
// tuka se definiraat vrednostite na parmetrite
// parmetrite sto se visok se ignoriraat
// helloWorld(12, 13, 45, 5, 6)

const value = helloWorld(12, 23)

// arrow function
const changeText = () => {
  // DOM object
  const element = document.getElementById('title')
  element.textContent = element.textContent + "My first excercise with functions"
  const list = document.createElement("ul")

  const listItem = document.createElement("li")
  listItem.textContent = "Hello world"

  list.appendChild(listItem)

  element.appendChild(list)
}