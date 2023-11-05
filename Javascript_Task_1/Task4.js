// Get the values of x and y from the user using prompts
var x = parseFloat(prompt("Enter the value of x:"));
var y = parseFloat(prompt("Enter the value of y:"));

if (x > y) {
  // If x is greater than y, display "Hello World" using alert and console.log
  alert("Hello World");
  console.log("Hello World");

  // Display "Hello World" on an HTML page
  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "Hello World";
} else {
  // If x is not greater than y, alert "Goodbye" using alert and console.log
  alert("Goodbye");
  console.log("Goodbye");

  // Display "Goodbye" on an HTML page
  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "Goodbye";
}
