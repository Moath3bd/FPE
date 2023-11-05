function calculate() {
    const operation = prompt("Enter the operation (+, -, *, /):");
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid numbers.");
        return;
    }

    let result;

    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        if (num2 === 0) {
            console.log("Division by zero is not allowed.");
            return;
        }
        result = num1 / num2;
    } else {
        console.log("Invalid operation. Please use +, -, *, or /.");
        return;
    }

    console.log(`Operation: ${operation}, Numbers: ${num1}, ${num2}, Result: ${result}`);
}

calculate();