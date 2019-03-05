/* Bob is preparing to pass IQ test. The most
 frequent task in this test is to find out which one of the given 
 numbers differs from the others. Bob observed that one number usually
  differs from the others in evenness. Help Bob — to check his answers,
   he needs a program that among the given numbers finds one that is 
   different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means
 indexes of the elements start from 1 (not 0)*/
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