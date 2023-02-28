// ARRAYS
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numbers = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
]

const symbols = [
   "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/" 
]
// <===========================================================================>
// GENERATE ARRAY 
function generateCharacters(includeNumbers, includeSymbols) {
    let result = letters
    if (includeNumbers) result = [...result, ...numbers]
    if (includeSymbols) result = [...result, ...symbols]
    
    return result 
}

// <===========================================================================>
// RANDOM NUMBER FROM 0 TO ARR.LENGTH (index)
function generateRandomNumber(index) {
    return Math.floor(Math.random()*index)        
}
// <===========================================================================>
// CREATE RANDOM CARACTER
function getCaracter(sortedArr, index) {
    return sortedArr[generateRandomNumber(index)]
}
// <===========================================================================>
// CREATE TWO RANDOM PASSWORDS
function generatePasswords() {    
    const includeNumbers = !document.getElementById('no_numbers').checked;   
    const includeSymbols = !document.getElementById('no_symbols').checked;    
    
    const sortedArr = generateCharacters(includeNumbers, includeSymbols);
    const index = sortedArr.length
    const passwordsLength = document.getElementById('password_langth').value
        
    let firstPassword = ''
    let secondPassword = ''
    for (let i = 0; i <= passwordsLength; i++) {        
        firstPassword += getCaracter(sortedArr, index)
        secondPassword += getCaracter(sortedArr, index)  
    }   
    
    document.getElementById('first_field').textContent = firstPassword
    document.getElementById('second_field').textContent = secondPassword
}
// <===========================================================================>
// <===========================================================================>
//  SLIDER RANGE FUNCTION
const rangeSlider = document.getElementById("password_langth");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  const rangeBullet = document.getElementById("password-bullet");
  rangeBullet.innerHTML = rangeSlider.value;
  let bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 578) + "px";
}