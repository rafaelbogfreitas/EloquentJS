let string = '';
let row = '';
let column = '';

for(i=0;i<=7;i++){
  
  if(i%2==0) row = ' ';
  else row = '#';
  
  for(a=0;a<=6;a++){
    if(row==' '){
      
      if(a%2==0) column = '#';
      else column = ' ';
    
    }else{
      
      if(a%2==0) column = ' ';
      else column = '#';
      
    }
    
    string = string + column;
  }
  
  console.log(row + string + '\n');
  string = '';
}
