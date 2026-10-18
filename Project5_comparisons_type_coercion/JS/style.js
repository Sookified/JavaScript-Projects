// Declare a variable
var myVariable = "Hello World";

var x=10;

// Display the variable's value
document.write("Variable value: " + myVariable + "<br>");

// Display the variable's data type
document.write("Data type: " + typeof myVariable);


// Display the variable's data type
document.write("Data type: " + typeof x);

// Display Infinity
document.getElementById("infinity").innerHTML = 1e309;

// Display -Infinity
document.getElementById("negativeInfinity").innerHTML = -1e309;

// Use the greater-than operator to display true
document.getElementById("trueResult").innerHTML = 10 > 5;

// Use the less-than operator to display false
document.getElementById("falseResult").innerHTML = 10 < 5;

// Use the greater-than operator to display true
console.log(10 > 5);

// Use the less-than operator to display false
console.log(10 < 5);

//using console.log method
console.log(2+2);

//using comparison operator
console.log((5+10)==15);

//using === operator

 // 1. Same data type and same value: true
console.log(10 === 10);

// 2. Different data type and different value: false
console.log(10 === "Hello");

// 3. Different data type but same value: false
console.log(10 === "10");

// 4. Same data type but different values: false
console.log(10 === 20);

 // AND operator (&&)
console.log(true && true);   // true
console.log(true && false);  // false

// OR operator (||)
console.log(true || false);  // true
console.log(false || false); // false

 // NOT operator (!)
console.log(!false);  // true
console.log(!true);   // false

function not_function(){
    document.getElementById("Not").innerHTML=!(5>10);
}