/*const inputnumber = prompt("insert their birthdate month by number:");

if (inputnumber !== null) {
  const monthNumber = parseInt(inputnumber);

  if (!isNaN(monthNumber) && monthNumber >= 1 && monthNumber <= 12) {
    let monthName;

    switch (monthNumber) {
      case 1:monthName = "January";break;
      case 2:monthName = "February";break;
      case 3:monthName = "March";break;
      case 4:monthName = "April";break;
      case 5:monthName = "May";break;
      case 6:monthName = "June";break;
      case 7:monthName = "July";break;
      case 8:monthName = "August";break;
      case 9:monthName = "September";break;
      case 10:monthName = "October";break;
      case 11:monthName = "November";break;
      case 12:monthName = "December";break;
      default:monthName = "Invalid input";
    }
    alert(`The Number: ${monthNumber}\nThe Month: ${monthName}`);
  } else {
    alert("Invalid input.Enter number between (1-12)");
  }
*/
/******** Task one (2)***********/
/*
let currentNumber = 1;

for (let i = 1; i <= length; i++) {
  let row = "";

  for (let x = 0; x < i; x++) {
    row += currentNumber + " ";
    currentNumber++;
  }

  console.log(row);
}
*/
/**********Task one 3 ******/
/*
let currentNumber = 1;
let numbrtStr="";
for (let i = 0; i <= 1000; i++) {
    if(i % 13 == 0)
    {
    numbrtStr+=i+" ";
    }
    
}
console.log(numbrtStr);
*/
/*********Task one 4***/
/*
function multiplication2(a, b) {
    if (a > b) {
      [a, b] = [b, a];
    }
    let mult = 0;
    for (let i = 0; i < Math.abs(a); i++) {
      mult += Math.abs(b);
    }
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
      mult = -mult;
    }
  
    return mult;
  }
*/
/***********Task one 5 *******/
/*
function TriangleArea(base, height) {
    if (base > 0 && height > 0) {
      const area = 0.5 * base * height;
      return area;
    } 
    else {
      return "valid triangle.";
    }
  }
  */
/**********Task one 6 *******/
/*
function Pandigital(number) {
    const digit = String(number);
    if (digit.length !== 10) {
      return false;
    }
    for (let i = 0; i <= 9; i++) {
      if (!digit.includes(String(i))) {
        return false;
      }
    }
    return true;
  }
  */
 /*************Task one 7 *******/
 /*
 const favoriteDrink = prompt("What is your favorite drink:");

if (favoriteDrink !== null) {
  let Price;

  switch (favoriteDrink.toLowerCase()) {
    case "banana":Price = 20;break;
    case "apple":Price = 10;break;
    case "orange":Price = 15;break;
    case "coffee":Price = 50;break;
    case "tea":Price = 5;break;
    default:Price = "Null";
  }

  if (Price === "Null") {
    alert(`We don't have price for ${favoriteDrink}`);
  } else {
    alert(`The price of a ${favoriteDrink} drink is ${Price} dollars`);
  }
}

*/
/*********Task one 8 */
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
  }

