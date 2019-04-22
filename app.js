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
            .catch(err => console.log(err))
    });
}

// 3. Write a JavaScript program to convert a specified number to an array of digits.

const numberToArray = number => number.toString().split("").map(el => parseInt(el));

//cute solution const numberToArray = number => [...`${number}`].map(number=>parseInt(number));

// 4. Write a JavaScript program to filter out the specified values from an specified array. Return the original array without the filtered values.

const filterArr = (arrayToFilter, originalArray) => {
    const filtered = originalArray.filter(el => arrayToFilter.indexOf(el) < 0);
    originalArray.length = 0;
    filtered.forEach(el => originalArray.push(el));
    return originalArray;
}