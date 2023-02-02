a=10
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
   // let x = document.getElementById("demo");
    console.log(this.firstName + " " + this.lastName)
    console.log(JSON.stringify(this))
  }
}

setTimeout(person.display,3000)