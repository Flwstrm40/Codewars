function permutations(string) {
    if (string.length === 1) {
        return [string];
    }
    let result = [];
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let remaining = string.slice(0, i) + string.slice(i + 1);
        let remainingPermutations = permutations(remaining);
        for (let j = 0; j < remainingPermutations.length; j++) {
            if(!result.includes(char + remainingPermutations[j])){
            result.push(char + remainingPermutations[j]);
            }
        }
    }
    return result;
}

console.log(permutations('a'));
console.log(permutations('ab'));
console.log(permutations('aabb'));
