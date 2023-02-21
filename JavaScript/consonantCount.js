function consonantCount(str) {
    // ...
    return str.replace(/[aiueo]|[^a-z]/gi, '').length;
    
  }

    console.log(consonantCount('aeiouAEIOU'));
    console.log(consonantCount('01234567890_'));
    console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'));
    console.log(consonantCount(''));
    console.log(consonantCount(' ^&$#'));
    console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#'));