// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define character sets to be used in generating the password
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  // Prompt user for password criteria
  var passwordLength = prompt("Enter password length (8-128 characters):");
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  // Validate user input and ensure at least one character set is selected
 //ALTER: change this so it if password length do the include else run the alert
  if (
    passwordLength < 8 ||
    passwordLength > 128 ||
    (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial)
  ) {
    alert("Invalid input. Please try again.");
    return;
  }

  // Generate password using selected character sets
  var password = "";
  var availableChars = "";
  if (includeLowercase) {
    availableChars += lowercaseChars;
  }
  if (includeUppercase) {
    availableChars += uppercaseChars; 
  }
  if (includeNumeric) {
    availableChars += numericChars;
  }
  if (includeSpecial) {
    availableChars += specialChars;
  }
  for (var i = password.length; i < passwordLength; i++) {
    password += getRandomChar(availableChars);
  }

  // Write password to the #password input
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Helper function to get a random character from a string
function getRandomChar(str) {
  return str.charAt(Math.floor(Math.random() * str.length));
}
