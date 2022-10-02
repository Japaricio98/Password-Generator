// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Generate password
function generatePassword() {
  var getPasswordLength = window.prompt("How many character would you like your password to contain?")
  var includeSpecialChars = window.confirm("Click OK to confirm including special characters.")
  var includeNumericChars = window.confirm("Click Ok to confirm including numeric characters.")
  var includeLowerChars = window.confirm("Click Ok to confirm including lowercase characters.")
  var includeUpperChars = window.confirm("Click Ok to confirm including uppercase characters.")



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
