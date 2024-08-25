const submitButton=document.getElementById('submitBtn');


function submitFeedback() {
    alert('Thank you for your valuable feedback');

    // Retrieve the values from the form inputs
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('userExperienceText').value;

    // Display the user information
    document.getElementById('userInfo').style.display = 'block';
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperience').innerHTML = experience;
}

submitButton.onclick = submitFeedback;

document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
 });