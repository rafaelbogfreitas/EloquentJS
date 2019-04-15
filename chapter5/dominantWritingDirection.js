//This exercise consisted in write a function that can received a string with
//different characters as a parameter and return the dominant writing direction

function dominantDirection(text) {
  
  //used countBy() to iterate through every character in the text and 
  //extract their code and script
  
  let script = countBy(text, char => {
    let scripts = characterScript(char.charCodeAt(0));
    
    //return the name of the direction in the scripts or 'none' if 'null'
    //after filter the ones with name nome to get the final array
    
    if(scripts) return scripts.direction;
    else return 'none'
  }).filter(({name}) => name != 'none');
  
  //used reduce() to return the name of the direction base on the bigger count;
  
  return script.reduce((count, {name}) => name, 0);  
}


console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
