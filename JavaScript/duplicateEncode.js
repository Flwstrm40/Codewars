function duplicateEncode(word){
    // ...
  let newWord = "";
  let chars=[...word.toLowerCase()];
  for(let i=0; i<chars.length; i++){
    let check=0;
    for(let j=0; j<chars.length; j++){
      if(chars[i]===chars[j]){
        check++;
      }
    }
    if(check>1){
      newWord += ")";
    }
    else{
      newWord +="(";
    }
  }
    return newWord;
}

    console.log(duplicateEncode("din"));
    console.log(duplicateEncode("recede"));
    console.log(duplicateEncode("Success"));
    console.log(duplicateEncode("(( @"));
