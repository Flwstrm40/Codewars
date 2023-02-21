function scramble(str1, str2) {
    var str1 = str1.split('').sort().join('');
    var str2 = str2.split('').sort().join('');
    var i = 0;
    var j = 0;
    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) {
            i++;
            j++;
        } else {
            i++;
        }
    }
    if (j === str2.length) {
        return true;
    }
    return false;
  }

    console.log(scramble('rkqodlw', 'world'));
    console.log(scramble('cedewaraaossoqqyt', 'codewars'));
    console.log(scramble('katas', 'steak'));