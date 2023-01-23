Array.prototype.capitalize = function() {
    for(let i = 0; i < this.length; i++) {
        this[i]=this[i].toUpperCase();
    }
}
let demo=["hello","guru"]
demo.capitalize();
console.log(demo);

// using without this function
Array.prototype.capitalize_without_this = function(demo) {
    for(let i = 0; i < demo.length; i++) {
        demo[i]=demo[i].toUpperCase()
    }
    return demo;
}
let demo2=["hello","guru"]
demo2.capitalize_without_this(demo2);
console.log(demo2);

//using values to change function prototype

function Person(first, last, eye) {
    this.firstName = first;
    this.lastName = last;
    this.eyeColor = eye;
  }
  const myFather = new Person("John", "Doe", "blue");
  const myMother = new Person("Sally", "Rally", "green");
  
  Person.prototype.nationality = "English";
  console.log(myFather.nationality );
  console.log(myMother.nationality);
  console.log(myFather)
  console.log(myMother)

/*
[ 'HELLO', 'GURU' ]
[ 'HELLO', 'GURU' ]
English
English
Person { firstName: 'John', lastName: 'Doe', eyeColor: 'blue' }
Person { firstName: 'Sally', lastName: 'Rally', eyeColor: 'green' }

*/ 