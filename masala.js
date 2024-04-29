function nextBigger(num) {
    let digits = String(num).split('');
    let i = digits.length - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--;
    }
    if (i === -1) {
        return -1;
    }

    let j = digits.length - 1;
    while (j > i && digits[j] <= digits[i]) {
        j--;
    }

    [digits[i], digits[j]] = [digits[j], digits[i]];

    let sortedTail = digits.splice(i + 1).sort((a, b) => a - b);

    let result = parseInt(digits.concat(sortedTail).join(''));

    return result;
}

