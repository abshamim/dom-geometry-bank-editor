// Step 1: add event listender to submit button
document.getElementById('submit-btn').addEventListener('click', () => {
    // Step 2: Get email value from the input field
    const emailField = document.getElementById('email-input');
    const emailValue = emailField.value;
    // Step 3: Get password value from the input field
    const passwordField = document.getElementById('password-input');
    const passwordValue = passwordField.value;
    // Step 4: Checking validity
    if((emailValue === 'shamim@gmail.com' || emailValue === 'abshamim') && passwordValue === 'shamim') {
        // Step 5.A: Redirect to Bank Page if the condition will be true
        window.location.href = 'geomatry.html';
    }
    else {
        // Step 5.B: Show Alert when the condition will be false
        alert('You email/username or password is wrong. Try again.');
    }
})