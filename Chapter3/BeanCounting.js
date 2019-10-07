function countBs(string){
  let b = 0;
  for(i=0;i<=string.length -1;i++){
    if (string[i] == 'B') b = b + 1;
  }
  return b
}

function countChar(string, character){
  let b = 0;
  for (i=0;i<=string.length -1;i++){
    if (string[i] == character) b = b + 1;
  }
  return b
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
