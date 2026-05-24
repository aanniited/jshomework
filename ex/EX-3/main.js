const avaregebtn = document.querySelector("#mybtn")
const input = document.querySelector("#myinp");
const resultText = document.querySelector("#result");


avaregebtn.addEventListener("click", () => {
    const textValue = input.value; 
    const numbersArray = textValue.split(":"); 
    
    console.log(numbersArray);
    
    
    let sum = 0;

for (let num of numbersArray) {
    sum = sum + Number(num); 
}

const average = sum / numbersArray.length; 
resultText.textContent = "ამ რიცხვების საშუალო არის: " + average;

input.value= "";





});
