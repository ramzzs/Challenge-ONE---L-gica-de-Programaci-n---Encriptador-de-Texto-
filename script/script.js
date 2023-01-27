//texto a encriptar
const $inputElement = document.getElementById("original-text");

//botones
const $btnEncrypt = document.getElementById("btn-encrypt");
const $btnDecrypt = document.getElementById("btn-decrypt");
const $btnCopy = document.getElementById("btn-copy");


//texto encriptado
const $msjContainer = document.querySelector(".msj-container");

//texto resultante (encriptado)
const $resultContainer = document.querySelector(".result-container");
const $resultElement = document.getElementById("txt-decrypt");
let resultValue;

//copiar texto generado (encriptado)
const $btnCopiarContainer = document.querySelector(".btn-copy-container");

//Variables para ralizar el encriptado
let inputValue = $inputElement.value;
const HIDE_ELEMENT = "hide";
const UNHIDE_ELEMENT = "unhide";


//encriptar
function encryptText(str) {
    let encryptedText;
    encryptedText = str.replaceAll("u","[]");
    encryptedText = encryptedText.replaceAll("e","3");
    encryptedText = encryptedText.replaceAll("s","5");
    encryptedText = encryptedText.replaceAll("t","7");
    encryptedText = encryptedText.replaceAll("a","4");
    encryptedText = encryptedText.replaceAll("o","0");
    return encryptedText;
}

//desencriptar

function decryptText(str){
    let encryptedText;
    encryptedText = str.replaceAll("[]","u");
    encryptedText = encryptedText.replaceAll("3","e");
    encryptedText = encryptedText.replaceAll("5","s");
    encryptedText = encryptedText.replaceAll("7","t");
    encryptedText = encryptedText.replaceAll("4","a");
    encryptedText = encryptedText.replaceAll("0","o");
    return encryptedText;
}

//ocultar y mostrar los elementos generados

function showResult(){
    $msjContainer.classList.replace(UNHIDE_ELEMENT, HIDE_ELEMENT);
    $resultContainer.classList.replace(HIDE_ELEMENT, UNHIDE_ELEMENT);
    $btnCopiarContainer.classList.replace(HIDE_ELEMENT, UNHIDE_ELEMENT);
}

function hideResult(){
    $resultContainer.classList.replace(UNHIDE_ELEMENT, HIDE_ELEMENT);
    $btnCopiarContainer.classList.replace(UNHIDE_ELEMENT, HIDE_ELEMENT);
    $msjContainer.classList.replace(HIDE_ELEMENT,UNHIDE_ELEMENT);
}

//boton para poder encriptar
$btnEncrypt.addEventListener("click", () =>{
    inputValue = $inputElement.value;
    if(inputValue){
        resultValue = encryptText(inputValue);
        $resultElement.textContent = resultValue;
        showResult();
    }
    


});

//boton para poder desencriptar
$btnDecrypt.addEventListener("click", () =>{
    inputValue = $inputElement.value;
    if(inputValue){
        resultValue = decryptText(inputValue);
        $resultElement.textContent = resultValue;
        showResult();
    }
});


//verificar cuando el texto a encriptar esta enfocado
$inputElement.addEventListener("input", (e) =>{
    if(!$inputElement.value){
        hideResult();
    }
})


$btnCopy.addEventListener("click", ()=> {
    let text = resultValue;
    navigator.clipboard.writeText(resultValue)
});