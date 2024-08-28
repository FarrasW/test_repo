    function performOperation() {
    // Retrieve input values
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const a = parseFloat(input1);
    const b = parseFloat(input2);

    if (!isNaN(a) && !isNaN(b)) {
        // Perform operations
        const additionResult = add(a, b);
        const multiplicationResult = multiply(a, b);
        const divisionResult = divide(a, b);

        // Display results
        displayResults(additionResult, multiplicationResult, divisionResult);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function add(a, b) {
    // Add the numbers
    return a + b;
}

function multiply(a, b) {
    // Multiply the numbers
    return a * b;
}

function divide(a, b) {
    // Check if b is 0 to avoid division by zero
    if (b === 0) {
        return 'Division by zero is not allowed';
    }
    // Divide the numbers
    return a / b;
}

function displayResults(additionResult, multiplicationResult, divisionResult) {
    // Display the results in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        Addition Result: ${additionResult}<br>
        Multiplication Result: ${multiplicationResult}<br>
        Division Result: ${divisionResult}
    `;
}

function displayResult(result) {
    // Display a single result or error message
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}
   