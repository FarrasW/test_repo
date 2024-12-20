function compute() {
    // Retrieve the value of the principal amount from the input field with id "principal"
    var principal = document.getElementById("principal").value;
    
    // Retrieve the value of the interest rate from the input field with id "rate"
    var rate = document.getElementById("rate").value;
    
    // Retrieve the number of years from the input field with id "years"
    var years = document.getElementById("years").value; 
    
    // Calculate the simple interest using the formula: principal * years * rate / 100
    var interest = principal * years * rate / 100;
    
    // Calculate the future year by adding the number of years to the current year
    var year = new Date().getFullYear() + parseInt(years);
    
    // Calculate the total amount by adding the principal and the interest
    var amount = parseInt(principal) + parseFloat(interest);
    
    // Get the element with id "result" to display the output
    var result = document.getElementById("result");
    
    // Check if the principal is less than or equal to zero
    if (principal <= 0) {
        // Alert the user to enter a positive number if the principal is not valid
        alert('Please enter a positive number!');
        
        // Set focus back to the principal input field for user correction
        document.getElementById("principal").focus();
    }
    else {
        // Display the result in the "result" element with formatted text
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + 
                           ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + 
                           "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + 
                           ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    } 
}

function updateRate() {
    // Get the current value of the rate slider
    var rateval = document.getElementById("rate").value;
    
    // Update the text inside the element with id "rate_val" to display the current rate value
    document.getElementById("rate_val").innerText = rateval;
}
