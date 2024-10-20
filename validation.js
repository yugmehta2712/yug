function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    var isValid = true;

    // Reset error messages
    emailError.style.display = "none";
    passwordError.style.display = "none";

    // Email validation
    if (email === "") {
        emailError.textContent = "Email is required.";
        emailError.style.display = "block";
        isValid = false;
    } else if (email !== "yug@gmail.com") {
        emailError.textContent = "Invalid email address.";
        emailError.style.display = "block";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Password is required.";
        passwordError.style.display = "block";
        isValid = false;
    } else if (password !== "000000") {
        passwordError.textContent = "Invalid password.";
        passwordError.style.display = "block";
        isValid = false;
    }

    // If validation passes, redirect to index.html
    if (isValid) {
        window.location.href = "index.html";  // Redirect to index.html
        return false;  // Prevent form submission
    }

    return isValid;
}