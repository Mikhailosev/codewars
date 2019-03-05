/*In this little assignment you are given a string 
of space separated numbers, and have to return the highest 
and lowest number.*/


function highAndLow(numbers){
    let newNumb=numbers.split(' ')
    return Math.max.apply(Math, newNumb)+ ' ' +Math.min.apply(Math, newNumb);
  }