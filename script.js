let generatePassword = () => {
  // Initialize empty array for storing characters allowed by the user
  let allowableCharacters = [];

  // Initialize empty string - characters will be pushed here to form the password
  let generatedPassword = "";

  // Prompt the user to select the character types they want by entering a string
  let charTypes = prompt(`Enter any combination of:
    'L' for lowercase characters
    'U' for uppercase characters
    'N' for numbers
    'S' for special characters
  All other characters will be ignored`).toUpperCase();

  // While the user input doesn't contain any valid selections, and they have not pressed 'cancel', prompt them again.
  while (
    charTypes !== null &&
    !charTypes.includes("L") &&
    !charTypes.includes("N") &&
    !charTypes.includes("U") &&
    !charTypes.includes("S")
  ) {
    charTypes = prompt(`OY! Your input must include at least one of:
    'L' for lowercase characters
    'U' for uppercase characters
    'N' for numbers
    'S' for special characters
  All other characters will be ignored`).toUpperCase();
  }

  // Push the selected character types to the allowableCharacters array by parsing the input string for certain letters
  if (charTypes.includes("L")) {
    allowableCharacters.push(
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    );
  }
  if (charTypes.includes("U")) {
    allowableCharacters.push(
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    );
  }
  if (charTypes.includes("N")) {
    allowableCharacters.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
  }
  if (charTypes.includes("S")) {
    allowableCharacters.push(
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "[",
      "]",
      "{",
      "}",
      ".",
      ",",
      "/",
      "<",
      ">",
      "`",
      "~",
      "`",
      "+",
      "=",
      "-",
      "_",
      "|",
      ":",
      ";"
    );
  }

  // Prompt the user for a desired password length
  let passwordLength = prompt("How many characters? (8 to 128)");

  // While the password length is too long, too short, or invalid, and not 'cancel', prompt the user again.
  while (
    passwordLength !== null &&
    (passwordLength > 128 || passwordLength < 8 || isNaN(passwordLength))
  ) {
    passwordLength = prompt("OY! Pick a password length from 8 to 128!");
  }

  // For every desired character (i.e. desired length), pick a random value from allowableCharacters and push it to the password string
  for (let i = 0; i < passwordLength; i++) {
    generatedPassword =
      generatedPassword +
      allowableCharacters[
        Math.floor(Math.random() * allowableCharacters.length)
      ];
  }

  return generatedPassword;
};

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to the generate button
generateBtn.addEventListener("click", writePassword);
