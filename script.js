let input = document.querySelector("#input");
let result = document.querySelector("#result");
let btn = document.querySelector("#btn");

input.addEventListener("input", function(e) {
    const regLetters = /^[a-zа-я0-9\s]+$/i;

    let inpStr = e.target.value.toLowerCase().trim();
    let outStr = [...inpStr].filter((elem) => regLetters.test(elem));
    let deleteEmpties = empties(outStr);
    return result.innerText = deleteEmpties.join("");
});

btn.addEventListener("click", function() {
    navigator.clipboard.writeText(result.innerText);
});

input.addEventListener("focus", function() {
    return input.value = ' '
});

function empties(elem) {
    let arr = elem.map(function(el) {
        return el === " " ? "-" : el;
    });
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "-" && arr[i + 1] === "-") {
            arr[i] = "";
        }
    }
    return arr;
}