function getMiddle(s)
{
  //Code goes here!
  if(s.length%2===0){
    return s.substr(s.length/2-1,2);
  }
  else{
    return s.substr(s.length/2,1);
  }
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("Ran"));
console.log(getMiddle("Randy"));
console.log(getMiddle("Mitake"));