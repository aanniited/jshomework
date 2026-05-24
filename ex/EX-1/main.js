
const button = document.querySelector("#mybtn")
const backdrop = document.querySelector("#backdrop")
const modal= document.querySelector("#modal")

button.addEventListener("click", (e) => { 
  backdrop.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  backdrop.style.position = "fixed";
  backdrop.style.top = "0";
  backdrop.style.left = "0";
  backdrop.style.width = "100%";
  backdrop.style.height = "100%";



    modal.style.backgroundColor = "white";
    modal.style.width = "300px"; 
    modal.style.padding = "20px"; 
    modal.style.position = "fixed";
   modal.style.zIndex = "15";

   modal.style.top = "50%";
   modal.style.left = "50%";
   modal.style.transform = "translate(-50%, -50%)";

   

 })


//დავალება 2

