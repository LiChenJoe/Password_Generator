const generateButton = document.querySelector("#generateButton");
const optionOne = document.querySelector(".optionOne");
const optionTwo = document.querySelector(".optionTwo");
const passwordLength = document.querySelector("#passwordLength");
const hasNumbers = document.querySelector("#hasNumbers");
const hasSymbal = document.querySelector("#hasSymbal");
const darkModeCheckBox = document.querySelector("#darkModeCheckBox");

function generate() {
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    optionOne.textContent="";
    optionTwo.textContent="";
    if (!hasSymbal.checked && !hasNumbers.checked) {
        characters.slice(52);
        for(let i=0; i<passwordLength.value; i++) {
            optionOne.textContent+= characters[Math.floor(Math.random()*52)];
            optionTwo.textContent+= characters[Math.floor(Math.random()*52)];
        }
    } else if (!hasSymbal.checked){
        characters.splice(52,29);
        for(let i=0; i<passwordLength.value; i++) {
            optionOne.textContent+= characters[Math.floor(Math.random()*62)];
            optionTwo.textContent+= characters[Math.floor(Math.random()*62)];
        }
    } else if (!hasNumbers.checked) {
        characters.splice(81);
        for(let i=0; i<passwordLength.value; i++) {
            optionOne.textContent+= characters[Math.floor(Math.random()*81)];
            optionTwo.textContent+= characters[Math.floor(Math.random()*81)];
        }
    } else {
        for(let i=0; i<passwordLength.value; i++) {
            optionOne.textContent+= characters[Math.floor(Math.random()*91)];
            optionTwo.textContent+= characters[Math.floor(Math.random()*91)];
        }
    }
    
    if (optionOne.textContent=== optionTwo.textContent){
        optionTwo.textContent="";
        if (!hasSymbal.checked && !hasNumbers.checked) {
            for(let i=0; i<passwordLength.value; i++) {
                optionOne.textContent+= characters[Math.floor(Math.random()*26)];
                optionTwo.textContent+= characters[Math.floor(Math.random()*26)];
            }
        } else if (!hasSymbal.checked) {
            for(let i=0; i<passwordLength.value; i++) {
                optionOne.textContent+= characters[Math.floor(Math.random()*36)];
                optionTwo.textContent+= characters[Math.floor(Math.random()*36)];
            }
        } else if (!hasNumbers.checked) {
            for(let i=0; i<passwordLength.value; i++) {
                optionOne.textContent+= characters[Math.floor(Math.random()*55)];
                optionTwo.textContent+= characters[Math.floor(Math.random()*55)];
            }
        } else {
            for(let i=0; i<passwordLength.value; i++) {
                optionOne.textContent+= characters[Math.floor(Math.random()*65)];
                optionTwo.textContent+= characters[Math.floor(Math.random()*65)];
                
            }
        }
    } 
}

function copyOne() {
    const copyContentOne = document.querySelector(".optionOne").textContent;
    // loading the content into our clipboard
    navigator.clipboard.writeText(copyContentOne);
}

function copyTwo() {
    const copyContentTwo = document.querySelector(".optionTwo").textContent;
    // loading the content into our clipboard
    navigator.clipboard.writeText(copyContentTwo);
}

function darkModeSwitch() {
    document.querySelector(".container").classList.toggle("darkModeContainer");
    document.querySelector(".box").classList.toggle("darkModeBox");
    document.querySelector(".tittleOne").classList.toggle("darkModeTittleOne");
    document.querySelector(".tittleTwo").classList.toggle("darkModeTittleTwo");
    document.querySelector("p").classList.toggle("darkModePText");
    document.querySelector("h6").classList.toggle("darkModePText");
    document.querySelector(".numOption>label").classList.toggle("darkModePText");
    document.querySelector(".symOption>label").classList.toggle("darkModePText"); 
    document.querySelector("footer").classList.toggle("darkModePText"); 
    
}

optionOne.addEventListener("click", copyOne);
optionTwo.addEventListener("click", copyTwo);
darkModeCheckBox.addEventListener("click", darkModeSwitch);