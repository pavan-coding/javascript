let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
let dem=new Rabbit("this is demo ")
console.log( rabbit.eats ); // true
console.log(dem.eats)