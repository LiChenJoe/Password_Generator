const generateButton = document.querySelector("#generateButton");
let optionOne = document.querySelector(".optionOne");
let optionTwo = document.querySelector(".optionTwo");
const passwordLength = document.querySelector("#passwordLength");
const hasNumbers = document.querySelector("#hasNumbers");
const hasSymbal = document.querySelector("#hasSymbal");
const darkModeCheckBox = document.querySelector("#darkModeCheckBox");

function checkNumbers(tet){
    return /\d/ .test(tet);
}

function checkSymbol(str){
    let pattern= /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return pattern.test(str);
}

function generate() {
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    optionOne.textContent="";
    optionTwo.textContent="";
    let numbersCharacters = characters.slice(81);
    let symbolCharacters = characters.slice(52,81);
    console.log(characters);
    console.log(numbersCharacters);
    console.log(symbolCharacters);
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
        console.log(optionOne.textContent);
        console.log(optionTwo.textContent);
        }
        console.log(typeof optionOne.textContent);
        console.log(!checkNumbers(optionOne.textContent));
        if (!checkNumbers(optionOne.textContent)){
            optionOne.textContent=optionOne.textContent.slice(0,-1);
            console.log(optionOne.textContent, "before");
            optionOne.textContent+=numbersCharacters[Math.floor(Math.random()*10)];
            console.log(optionOne.textContent, "after");
        }
         if (!checkNumbers(optionTwo.textContent)){
            optionTwo.textContent=optionTwo.textContent.slice(0,-1);
            console.log(optionTwo.textContent, "before");
            optionTwo.textContent+=numbersCharacters[Math.floor(Math.random()*10)];
            console.log(optionTwo.textContent, "after");
        } 
        console.log("Here2");
    } else if (!hasNumbers.checked) {
        characters.splice(81);
        for(let i=0; i<passwordLength.value; i++) {
            optionOne.textContent+= characters[Math.floor(Math.random()*81)];
            optionTwo.textContent+= characters[Math.floor(Math.random()*81)];
        }
        console.log(optionOne.textContent);
        console.log(optionTwo.textContent);
        if (!checkSymbol(optionOne.textContent)){
            optionOne.textContent=optionOne.textContent.slice(0,-1);
            console.log(optionOne.textContent, "before");
            optionOne.textContent+=symbolCharacters[Math.floor(Math.random()*29)];
            console.log(optionOne.textContent, "after");
        }
         if (!checkSymbol(optionTwo.textContent)){
            optionTwo.textContent=optionTwo.textContent.slice(0,-1);
            console.log(optionTwo.textContent, "before");
            optionTwo.textContent+=symbolCharacters[Math.floor(Math.random()*29)];
            console.log(optionTwo.textContent, "after");
        } 
    console.log("Here3");
    } else {
        for(let i=0; i<passwordLength.value; i++) {
            optionOne.textContent+= characters[Math.floor(Math.random()*91)];
            optionTwo.textContent+= characters[Math.floor(Math.random()*91)];
        }
        if (!checkSymbol(optionOne.textContent) && !checkNumbers(optionOne.textContent)){
            optionOne.textContent=optionOne.textContent.slice(1);
            console.log(optionOne.textContent, "before");
            optionOne.textContent+=symbolCharacters[Math.floor(Math.random()*29)];
            console.log(optionOne.textContent, "after");
            optionOne.textContent=optionOne.textContent.slice(0,-1);
            console.log(optionOne.textContent, "before");
            optionOne.textContent+=numbersCharacters[Math.floor(Math.random()*10)];
            console.log(optionOne.textContent, "after");
        }
         if (!checkSymbol(optionTwo.textContent) && !checkNumbers(optionTwo.textContent)){
            optionTwo.textContent=optionTwo.textContent.slice(1);
            console.log(optionTwo.textContent, "before");
            optionTwo.textContent+=symbolCharacters[Math.floor(Math.random()*29)];
            console.log(optionTwo.textContent, "after");
            optionTwo.textContent=optionTwo.textContent.slice(0,-1);
            console.log(optionTwo.textContent, "before");
            optionTwo.textContent+=numbersCharacters[Math.floor(Math.random()*10)];
            console.log(optionTwo.textContent, "after");
        } 
        if (!checkNumbers(optionOne.textContent)){
            optionOne.textContent=optionOne.textContent.slice(0,-1);
            console.log(optionOne.textContent, "before");
            optionOne.textContent+=numbersCharacters[Math.floor(Math.random()*10)];
            console.log(optionOne.textContent, "after");
        }
         if (!checkNumbers(optionTwo.textContent)){
            optionTwo.textContent=optionTwo.textContent.slice(0,-1);
            console.log(optionTwo.textContent, "before");
            optionTwo.textContent+=numbersCharacters[Math.floor(Math.random()*10)];
            console.log(optionTwo.textContent, "after");
        } 
        if (!checkSymbol(optionOne.textContent)){
            optionOne.textContent=optionOne.textContent.slice(1);
            console.log(optionOne.textContent, "before");
            optionOne.textContent+=symbolCharacters[Math.floor(Math.random()*29)];
            console.log(optionOne.textContent, "after");
        }
         if (!checkSymbol(optionTwo.textContent)){
            optionTwo.textContent=optionTwo.textContent.slice(1);
            console.log(optionTwo.textContent, "before");
            optionTwo.textContent+=symbolCharacters[Math.floor(Math.random()*29)];
            console.log(optionTwo.textContent, "after");
        } 
    console.log("Here4");
    }
    console.log(optionOne.textContent=== optionTwo.textContent);
    if (optionOne.textContent=== optionTwo.textContent){
        console.log(optionOne.textContent=== optionTwo.textContent);
        console.log("Ah ha")
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
        console.log("Here5");
    } 
    console.log("Here6");

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