function misNum(arr){
  if (arr.length <2){
    console.log("Array should have atleast two numbers");   
  }
  
  arr.sort() //Sorting array in ascending order
  
  let missingNum = [];
  for(let i =arr[0]; i<arr[arr.length-1]; i++){
    if (arr.indexOf(i) === -1){   //if the index of i is not found that number is pushed into missingNum array
      missingNum.push(i);
      
    }
  }  
    return missingNum;
  
}

console.log(misNum([78,71]))  //[72,73,74,75,76,77]
