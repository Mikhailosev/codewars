 /* Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

*/
 function order(words) {
        var newArr=[]
        newWords=words.split(' ')
        let k = 1
        for (let i=0;i<newWords.length;i++) {
            if (newWords[i].indexOf(k)>-1) {
                newArr.push(newWords[i]);
                i=-1
                k++
            }
        }
        console.log(newArr)
        return newArr.join(' ')
    }
    order("is2 Thi1s T4est 3a")
   
   
   
    /*function order(words){
    let i=0
    let onlyNumb=[]
    let newArr=[]
      let newWords=words.split(' ')
      for (i; i<newWords.length;i++){
      let regExpNum = /\d+/g;
      onlyNumb=words.match( regExpNum );
      onlyNumb.sort();
      }
    }
          order("is2 Thi1s T4est 3a")
  */