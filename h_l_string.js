function highAndLow(numbers){
    let newNumb=numbers.split(' ')
    return Math.max.apply(Math, newNumb)+ ' ' +Math.min.apply(Math, newNumb);
  }