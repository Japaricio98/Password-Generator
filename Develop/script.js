// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Generate password
function generatePassword() {

  /*
  // Prompt user for password requirements
  var getPasswordLength = window.prompt("How many characters would you like your password to contain?")
  var includeSpecialChars = window.confirm("Click OK to confirm including special characters.")
  var includeNumericChars = window.confirm("Click Ok to confirm including numeric characters.")
  var includeLowerChars = window.confirm("Click Ok to confirm including lowercase characters.")
  var includeUpperChars = window.confirm("Click Ok to confirm including uppercase characters.")

  /*
  // Handle errors for password requirements
  var minPasswordLength = window.alert("Password length must be at least 8 characters.")
  var maxPasswordLength = window.alert("Password length cannot exceed 128 characters.")
  var noCharTypes = window.alert("Must select at least one character type.")
  */

  // Password length requirement
  var getPasswordLength = window.prompt("How many characters would you like your password to contain?");
  if (getPasswordLength < 8) {
    window.alert("Password length must be at least 8 characters.");
  }
  if (getPasswordLength > 128) {
    window.alert("Password length cannot exceed 128 characters.");
  }
  if (getPasswordLength == null) {
    window.alert("Password length must be at least 8 characters.");
  }

  // Character requirements
  var includeSpecialChars = window.confirm("Click OK to confirm including special characters.");
  var includeNumericChars = window.confirm("Click Ok to confirm including numeric characters.");
  var includeLowerChars = window.confirm("Click Ok to confirm including lowercase characters.");
  var includeUpperChars = window.confirm("Click Ok to confirm including uppercase characters.");
  if (includeSpecialChars == false & includeNumericChars == false & includeLowerChars == false & includeUpperChars == false) {
    window.alert("Must select at least one character type.");
  }

  






  
  // Troubleshooting
  window.alert(
    "getPasswordLength:\t" + getPasswordLength + "\nincludeSpecialChars:\t" + includeSpecialChars + "\nincludeNumericChars:\t" + includeNumericChars + "\nincludeLowerChars:\t" + includeLowerChars + "\nincludeUpperChars:\t" + includeUpperChars
  )

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
