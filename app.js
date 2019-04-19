// 1. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

const chechIfEqual = (ob1, ob2) => Object.keys(ob1).every(key => ob1[key] === ob2[key]);

const ob1 = {
    1: "ww"
}
const ob2 = {
    1: "ww"
}

console.log(chechIfEqual(ob1, ob2));