
//დავალება 1 
const Replace = (string, valueToReplace, valueToReplaceWith) => { 
    
    const wordsArray = string.split(' '); 

    
    const updatedArray = wordsArray.map((word) => {
        if (word === valueToReplace) {
            return valueToReplaceWith; 
        } else {
            return word;
        }
    });
   
    
    return updatedArray.join(' ');
}


console.log(Replace( "string", "valueToReplace", "valueToReplaceWith" ));


//დავალება 2  


const capital = (word) => { 
    
    const wordsArray = word.split(' '); 
    
    const updatedArray = wordsArray.map((singleWord) => {
        
        return singleWord[0].toUpperCase() + singleWord.slice(1);
    });
   
    return updatedArray.join(' '); 
}

console.log(capital('JavaScript is a very difficult language'));


//დავალება 3 



const sortbyAge = (usersArray) => {
    
    return usersArray.sort((a, b) => a.age - b.age);
};


const users = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 },
    { name: 'Ana', age: 25 }
];

console.log(sortbyAge(users));