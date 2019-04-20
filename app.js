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

// 3. Write a JavaScript program to converts a specified number to an array of digits.

const numberToArray = number => number.toString().split("").map(el => parseInt(el));

//cute solution const numberToArray = number => [...`${number}`].map(number=>parseInt(number));