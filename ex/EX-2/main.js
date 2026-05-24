const input =document.querySelector('#myinp')
const btn =document.querySelector("#mybtn")

btn.addEventListener ("click", (e) => {

const color = input.value 

const allowedColors = ["red", "blue", "green", "black", "white"];

if (allowedColors.includes(color)) {

document.body.style.backgroundColor = color;

    
} else {
    alert(" pls enter the valid color");
}

const colors = input.value.trim().toLowerCase();

input.value = "";

})