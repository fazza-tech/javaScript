function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  myFirst();
  mySecond()

//   document.getElementById("clickMe").addEventListener("click", function() {
//     alert("The element was clicked!"); //Event Listner
// });


function displayResult(a){
    document.getElementById("demo").innerHTML = a;
}

function calculate(num1,num2){
    let sum = num1+num2;
    displayResult(sum) //This violates the principle of separating concerns.
}

calculate(5,5);


setTimeout(function(){myFunc("I lob u")}, 3000);

function myFunc(value){
    document.getElementById("demo").innerHTML = value
}

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +d.getMinutes() + ":" +d.getSeconds();
}