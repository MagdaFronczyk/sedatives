// 1. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

const chechIfEqual = (ob1, ob2) => Object.keys(ob1).every(key => ob1[key] === ob2[key]);

// 2. Write a JavaScript program to copy a string to the clipboard.

const copyToClip = (btn, input) => {
    btn.addEventListener("click", () => {
        const inputValue = input.value;
        navigator.clipboard.writeText(inputValue)
            .then(() => {
                input.value = ' ';
            })
            .catch(err => console.log(err));
    });
}

// 3. Write a JavaScript program to convert a specified number to an array of digits.

const numberToArray = number => number.toString().split("").map(el => parseInt(el));

//cute solution const numberToArray = number => [...`${number}`].map(number=>parseInt(number));

// 4. Write a JavaScript program to filter out the specified values from an specified array. Return the original array without the filtered values.

const filterArr = (arrayToFilter, originalArray) => {
    // const filtered = originalArray.filter(el => arrayToFilter.indexOf(el) < 0);
    const filtered = originalArray.filter(el => !arrayToFilter.includes(el)); /* ES6 solution */
    originalArray.length = 0;
    filtered.forEach(el => originalArray.push(el));
    return originalArray;
}

// 5. Write a JavaScript program to extract out the values at the specified indexes from an specified array.

const filterAtIndex = (originalArray, arrayOfIndexes) => {
    const filtered = originalArray.filter((el, index) => index === arrayOfIndexes[index]);
    return filtered;
}

// 6. Write a JavaScript program to remove non-printable ASCII characters from a given string.

const removeUnprintableASCIIchars = (string) => {
    let filtered = string
        .split('')
        .map((el, index) => string.charCodeAt(index))
        .filter(el => el >= 31 && el <= 127)
        .map(el => String.fromCharCode(el))
        .join('');
    return filtered
}

// 7. Write a JavaScript program to convert the length of a given string in bytes.

const stringLengthToBytes = (string) => {
    constToBytes = new TextEncoder('utf-8').encode(string).length;
    return constToBytes
}