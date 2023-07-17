const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePassword = document.getElementById("btn-generate-password")
let passwordOneElement = document.getElementById("btn-passwordOne")
let passwordTwoElement = document.getElementById("btn-passwordTwo") 
let passwordOne = ""
let passwordTwo = ""
passwordLength = 10

generatePassword.addEventListener("click", function() {
    passwordOne = ""
    passwordTwo = ""
    
  for (let i = 0; i < passwordLength; i++) {
    passwordOne += characters[Math.floor(Math.random() * characters.length)];
    passwordTwo += characters[Math.floor(Math.random() * characters.length)];
  }

  passwordOneElement.textContent = passwordOne;
  passwordTwoElement.textContent = passwordTwo;
});