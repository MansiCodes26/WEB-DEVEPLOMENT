let display = document.getElementById('display');

// Append numbers and operators
function appendValue(value) {
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Clear everything
function clearDisplay() {
    display.innerText = "0";
}

// Delete the last character
function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}

// The core calculation
function calculate() {
    try {
        // Evaluate the string expression
        // Replace visual symbols with JS operators
        let expression = display.innerText.replace('×', '*').replace('÷', '/');
        let result = eval(expression);
        
        // Handle division by zero or invalid math
        if (!isFinite(result)) {
            display.innerText = "Error";
        } else {
            // Round to 4 decimal places to avoid floating point issues
            display.innerText = Math.round(result * 10000) / 10000;
        }
    } catch (e) {
        display.innerText = "Error";
    }
}