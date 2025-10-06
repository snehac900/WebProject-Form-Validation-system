// Form validation on submit
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get input values
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  // Reset previous errors
  nameError.innerText = "";
  emailError.innerText = "";
  phoneError.innerText = "";
  passwordError.innerText = "";
  confirmPasswordError.innerText = "";

  let isValid = true;

  // Full Name Validation
  if (fullName.length < 5) {
    nameError.innerText = "Name must be at least 5 characters long.";
    isValid = false;
  }

  // Email Validation
  if (!email.includes("@")) {
    emailError.innerText = "Enter a valid email address.";
    isValid = false;
  }

  // Phone Number Validation
  if (phone.length !== 10 || phone === "123456789" || isNaN(phone)) {
    phoneError.innerText = "Enter a valid 10-digit phone number.";
    isValid = false;
  }

  // Password Validation
  if (
    password.length < 8 ||
    password.toLowerCase() === "password" ||
    password.toLowerCase() === fullName.toLowerCase()
  ) {
    passwordError.innerText =
      "Password must be at least 8 characters and should not be 'password' or your name.";
    isValid = false;
  }

  // Confirm Password Validation
  if (confirmPassword !== password) {
    confirmPasswordError.innerText = "Passwords do not match.";
    isValid = false;
  }

  // If all validations pass
  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("registrationForm").reset();
  }
});
