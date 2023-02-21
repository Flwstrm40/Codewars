function moveZeros(arr) {
    let newArr = [];
    
    for(let i=arr.length-1; i>=0; i--){
      if(arr[i]===0){
        newArr.push(arr[i]);
      }
      else{
        newArr.unshift(arr[i]);
      }
    }
    
    return newArr;
  }

    console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));