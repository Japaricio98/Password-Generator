// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Generate password
function generatePassword() {

  // Password length requirement
  var getPasswordLength = window.prompt("How many characters would you like your password to contain?");

  while ((getPasswordLength == false) | (getPasswordLength > 128) | (getPasswordLength < 8)) {

    if (getPasswordLength < 8) {
      window.alert("Password length must be at least 8 characters.");
    }
    if (getPasswordLength > 128) {
      window.alert("Password length cannot exceed 128 characters.");
    }
    if (getPasswordLength == null) {
      window.alert("Password length must be at least 8 characters.");
    }

    var getPasswordLength = window.prompt("How many characters would you like your password to contain?");

  }


  // Character requirements
  var includeSpecialChars = window.confirm("Click OK to confirm including special characters.");
  var includeNumericChars = window.confirm("Click Ok to confirm including numeric characters.");
  var includeLowerChars = window.confirm("Click Ok to confirm including lowercase characters.");
  var includeUpperChars = window.confirm("Click Ok to confirm including uppercase characters.");
  if (includeSpecialChars == false & includeNumericChars == false & includeLowerChars == false & includeUpperChars == false) {
    window.alert("Must select at least one character type.");
  }


  // Character sets
  const specialChars = "!\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~";  // does not include a space character
  const numericalChars = '0123456789';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  
  // Creating password
  var passwordOptions = "";
  var randomPassword = "";
  if (includeSpecialChars) {
    passwordOptions += specialChars;
  };
  if (includeNumericChars) {
    passwordOptions += numericalChars;
  };
  if (includeLowerChars) {
    passwordOptions += lowercaseChars;
  };
  if (includeUpperChars) {
    passwordOptions += uppercaseChars;
  };

  for (i = 0; i < getPasswordLength; i++) {
    randomPassword += passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length));
  };


  // Display selected options
  window.alert(
    "Here is a summary of your password requirements:\n\n" + 
    "Password length:  " + getPasswordLength + "\n" +
    "Include special characters?:  " + includeSpecialChars + "\n" + 
    "Include numeric characters?:  " + includeNumericChars + "\n" + 
    "Include lowercase characters?:  " + includeLowerChars + "\n" + 
    "Include uppercase characters?:  " + includeUpperChars
  )


  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
