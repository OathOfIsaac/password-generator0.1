// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
}



var generatePassword= function() {
    var length = parseInt(prompt("Please choose a number between 8 - 128"));
    if (length > 128 || length < 8){
    
        alert("Please pick a valid langth");
        return false;
    };
    var hasLower = confirm("Would you like your password to have lowercase letters?")
    var hasUpper = confirm("Would you like your password to have uppercase letters?")
    var hasNumber = confirm("Would you like your password to have numbers?")
    var hasSymbol = confirm("Would you like your password to have symbols?")

    
   var password=promptResults(
        length, 
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol
        );
        return password;
    }

// Write password to the #password input
function promptResults(length, lower, upper, number, symbol) {
    // 1. init pw var
    // 2. Filter out unchecked types
    // 3 Loop over length call generator function for each type.
    // 4 Add final pw to the pw var and return

    let result = "";
    //slight optimization here
    for (var i= 0; i < Math.floor(length/(lower+upper+number+symbol)); i++ ) { 
        if (lower){
            result = result + getRandomLower()
        }
        if (upper){
            result+=getRandomUpper()
        }
        if (number){
            result+=getRandomNumber()
        }
        if (symbol){
            result+=getRandomSymbol()
        }
    }
    let updatedResult = result.substring(0,length)
    return updatedResult
}








//Random number generator generates number between RandomVar(Min, Max) ie RandomVar(1,4) generates 3
var randomVar = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};
//Generates random characters from fromCharCode
function getRandomLower() {
    return String.fromCharCode(randomVar(97,122));
}

function getRandomUpper() {
    return String.fromCharCode(randomVar(65, 90));
};

function getRandomNumber() {
    return String.fromCharCode(randomVar(48, 57));
};

function getRandomSymbol() {
    var symbols = "! #$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generate event listener
//generateBtn.addEventListener("click", () => { 
//    writePassword()
//});
