/* Da se definira klasa kola koja sto sodrzi
 properties: model, boja, godina na proizvodstvo,
 maksimalna brzina i momentalna brzina

Treba da se kreiraat dva metodi so koi sto ke go
 ubrzuvame i usporuvame voziloto. Pri ubrzuvanje, dokolku ja dostigneme
 maksimalnata brzina, i probame da ubrzame uste povekje, da se ispecati predupreduvanje (ne moze da odis pobrzo od 200)
 Pri usporuvanje, dokolku stigneme do 0, da se ispecati poraka deka voziloto e zapreno (stopping...)

 Dvata metodi za ubrzuvanje i usporuvanje treba kako parametar da primaat vrednost
 (za kolku km/h ubrzuvame ili usporuvame) +20 -20

 Vozenjeto na kolata go simulirame so beskonecen while ciklus */

 class Car {
   constructor (model, color, year, maxVelocity, currentVelocity) {
    this.model = model
    this.color = color
    this.year = year
    this.maxVelocity = maxVelocity
    this.currentVelocity = currentVelocity
   }

   goFaster(acceleration) {
     let newVelocity = this.currentVelocity + acceleration
     if (newVelocity >= this.maxVelocity) {
       this.currentVelocity = this.maxVelocity
       console.log('You have reached the speed limit!')
     } else {
       this.currentVelocity = newVelocity
     }
   }

   goSlower(deceleration) {
     let newVelocity = this.currentVelocity - deceleration
     if (newVelocity <= 0) {
      this.currentVelocity = 0
      console.log("The vehicle has stopped")
     } else {
       this.currentVelocity = newVelocity
     }
   }
 }

 const Jeep = new Car('Jeep', 'white', 2010, 200, 0)

// setTimeout(() => {
//   Jeep.goFaster(30)
//   console.log(Jeep.currentVelocity)
// }, 2000)

// asinhrona funkcija
setInterval(() => {
  Jeep.goFaster(30)
  console.log('Jeep speed: ' + Jeep.currentVelocity)
}, 1000)

const C4 = new Car('Citroen', 'black', 2006, 200, 150)

setInterval(() => {
  C4.goSlower(20)
  console.log('Citroen speed: ' + C4.currentVelocity)
}, 1000)




   
 