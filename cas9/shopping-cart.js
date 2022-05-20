/*
Imame klasa produkt koj sto e definiran so ime i cena
i klasa shopping cart koja sto sodrzi niza od produkti

Klasata shopping cart treba da sodrzi metod koj sto ke ni 
ja presmeta vkupnata cena na site produkti koi gi sodrzi 

*/

class Product {
  name
  price

  constructor(name, price) {
    // property binding
    this.name = name
    this.price = price
  }
}


// functional logic
class ShoppingCart {
  products

  constructor(products) {
    this.products = products
  }

  getTotalPrice () {
    return this.products.reduce((sum, product) => sum + product.price, 0)
  }
  
  addProduct (newProcut) {
    this.products.push(newProcut)
  }

  removeProduct (name) {
    this.products = this.products.filter(product => {
      if (product.name === name) {
        return false
      }
      return true
    })
  }
}


// business logic
const Milk = new Product('milk', 40)
const Bread = new Product('bread', 20)
const Egg = new Product('egg', 5)
const Banana = new Product('banana', 10)

const Breakfast = new ShoppingCart([Milk, Bread, Egg])
Breakfast.addProduct(Banana)
Breakfast.removeProduct('egg')
Breakfast.removeProduct('banana')

const totalPrice = Breakfast.getTotalPrice()
console.log(Breakfast.products, totalPrice)