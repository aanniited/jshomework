

 const array = [
    {name:'Temo', age: 25},
    {name:'lasha', age: 21},
    {name:'ana', age: 28}
    
 ]; 

  function YoungestName(users) {
  let youngest = users[0];

  for (const user of users) {
    if (user.age < youngest.age) {
      youngest = user;
    }
  }

  return youngest.name;
}

console.log(YoungestName(array)); 


const newObj = array.map (function(element){

    return element 


})

console.log (array)
console.log(newObj);




function randomNumber () {
    return parseInt(Math.random() * 6) +1
}

let A =  randomNumber()
console.log(A);

while (A !== 3){
    A=randomNumber()
    console.log(A)
}

let B =  randomNumber()
console.log(B);

while (A !== 3){
    A=randomNumber()
    console.log(A)
}

if (A < B) {
    console.log("გაიმარჯვა A-მ");
} else if (B < A) {
    console.log("გაიმარჯვა B-მ");
} 


