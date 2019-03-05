/*
Implement the function unique_in_order which takes as argument 
a sequence and returns a list of items without any elements
with the same value next to each other and preserving the original order of elements.*/
var uniqueInOrder=function(iterable){
    let newArr=[]
    let returnArr=[]
    let checkType=()=>{
    return typeof iterable
    }//your code here - remember iterable can be a string or an array
    if (checkType()==='string'){
    newArr=iterable.split('')
    }
    else {
    newArr=iterable
    }
    for (let i=0;i<newArr.length;i++){
    if (newArr[i]!==newArr[i+1]){
    returnArr.push(newArr[i])
    }
    
    }
    return returnArr
    }
    uniqueInOrder('looool')