// var numberofButton = document.querySelectorAll(".btn");

// var p = document.querySelector(".p");
// var equal = document.getElementById("equal");
// var answer = document.getElementById("answer");
// answer.innerText = ""
// p.innerHTML = "";

// function clear() {
//     p.innerHTML = "";
//     answer.innerText = "";
//     equal.style.visibility = "hidden";
// }
// numberofButton.forEach(function(event) {
//     event.addEventListener("click", function() {
//         switch (event.innerHTML) {
//             case "C":
//                 clear();
//                 break;
//             case "del":
//                 p.innerHTML = p.innerHTML.replace(p.innerHTML.slice(p.innerHTML.length - 1), "");
//                 break;
//             case "x":
//                 let temp = p.innerHTML
//                 p.innerHTML += "x";
//                 break;
//             case "%":
//                 let s = p.innerHTML;
//                 s /= 100;
//                 answer.innerHTML = s;
//                 break
//             case "=":
//                 let op = eval(p.innerHTML);
//                 answer.innerHTML = op;
//                 break;

//             default:
//                 p.innerHTML += event.innerHTML

//                 break;

//         }

//         for (let i = 0; i < p.innerHTML.length; i++) {
//             let sh = p.innerHTML[i];
//             if (sh == "x" || sh == "+" || sh == "*" || sh == "-") {
//                 document.getElementById("equal").style.visibility = "visible";

//             }
//         }

//     })
// })
// console.log("Logging");


let numbers = document.querySelectorAll("[data-number]");
let operators = document.querySelectorAll("[data-operator]");
let deleteButton = document.querySelector("[data-delete]");
let clearButton = document.querySelector("[data-clear]");
let calculate = document.querySelector("[data-equal]");
let previous = new Set();
let calc = "";
let display = document.getElementById("output");
let answer = document.getElementById("answer")
numbers.forEach(ele => {
    ele.addEventListener("click", () => {
        // nums.push(ele.innerHTML);
        display.innerHTML += ele.innerHTML;
        // if (previous.size !== 0) {
        //     previous.forEach((e) => nums += e)
        // }
    })
})

let sign = '';
clearButton.addEventListener("click", () => {
    display.innerHTML = "";
    document.getElementById("pre").innerHTML = ""
    previous = new Set();
    document.getElementById("sign").innerHTML = "";
    answer.innerHTML = "";




})
deleteButton.addEventListener("click", () => {
    display.innerHTML = display.innerHTML.replace(display.innerHTML.slice(display.innerHTML.length - 1), "");
})
operators.forEach(event => {
    event.addEventListener("click", () => {
        if (event.innerHTML == "%") {
            display.innerHTML /= 100;
        } else {
            previous.add(display.innerHTML);
            document.getElementById("pre").innerHTML = display.innerHTML
            display.innerHTML = "";
            sign = event.innerHTML == "×" ? "*" : event.innerHTML == "÷" ? "/" : event.innerHTML;
            document.getElementById("sign").innerHTML = sign == "*" ? "×" : sign == "/" ? "÷" : sign;
            // console.log(sign);
            previous.add(sign)
                // console.log(previous)
        }

    })
})
calculate.addEventListener("click", () => {

    previous.add(display.innerHTML);
    [...arr] = previous
    let ans = eval(arr.join(""));
    answer.innerHTML = ans;
    // console.log(arr)


})