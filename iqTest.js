function iqTest(numbers){
    let newNumb=numbers.split(' ');
    let oddNumb=[];
    let evenNumb=[];

    for (let i=0; i<newNumb.length; i++){
        let numberInt=parseInt(newNumb[i])
        if (numberInt % 2 ==0) {
            evenNumb.push(numberInt);
        }
        else {
            oddNumb.push(numberInt);
            console.log(oddNumb)
        }
    }
    if (oddNumb.length > evenNumb.length)
    {
        console.log(oddNumb)
        
        return newNumb.indexOf(evenNumb[0]+'')+1;
    }
    console.log(oddNumb)
    return newNumb.indexOf(oddNumb[0]+'')+1;
}