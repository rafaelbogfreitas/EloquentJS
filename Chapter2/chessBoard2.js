let string = '';
let row = '';
let column = '';

const createBoard = function(nRows, nColumns){

    for(i=1;i<=nRows;i++){

      if(i%2==0) row = '#';
      else row = ' ';

      for(a=1;a<nColumns;a++){
        if(row==' '){

          if(a%2==0) column = ' ';
          else column = '#';

        }else{

          if(a%2==0) column = '#';
          else column = ' ';

        }

        string = string + column;
      }

      console.log(row + string + '\n');
      string = '';
    }
};

createBoard(8,8);
