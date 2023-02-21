function duplicateCount(text){
    //...
    // let words = text.toLowerCase();
    // let checker = 0;
    // let newText = "";
    // for(let i=0; i<words.length; i++){
    //     let checkWords=0;
    //   for(let j=0; i<words; i++){
    //     if(words[i]===words[j]){
    //       checkWords++;
    //     }
    //     if(checkWords==2){
    //       newText = words.replace(words[i], '');
    //       checker++;
    //     }
    //   }
    // }
    // return checker;
    let words = text.toLowerCase();
    let checker = 0;
    let newText = "";
    for(let i=0; i<words.length; i++){
        let checkWords=0;
      for(let j=0; j<words.length; j++){
        if(words[i]===words[j]){
          checkWords++;
        }
        if(checkWords==2){
          newText = words.replace(words[i], '');
          checker++;
        }
      }
    }
    return checker;
  }

    console.log(duplicateCount("abcde"));
    console.log(duplicateCount("aabbcde"));
    console.log(duplicateCount("aabBcde"));

