function cleanedCounts(data) {
    let newArr = [];
    let maxNum = data[0];
    for(let i = 0; i<data.length; i++){
      if(data[i]>maxNum){
        maxNum = data[i];
    }
        newArr.push(maxNum);
    }
    return newArr;
  }

    console.log(cleanedCounts([1, 1, 2, 2, 2,1,2,1,2]));