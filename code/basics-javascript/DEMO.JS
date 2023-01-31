
(function () {
  let x = "Hello!!";  // I will invoke myself
})();
//or
(()=> {
    let x = "Hello!!";  // I will invoke myself
  })();
//or
var a; 
(a=function () {
    console.log("hello")// I will invoke myself
  })();