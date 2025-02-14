import { clearHistory } from "./history.js";
export function reply(clicked_id, unit) {
    var _a;
    let input = document.querySelector('input');
    let elm = document.getElementById(clicked_id);
    let value = elm === null || elm === void 0 ? void 0 : elm.getAttribute("value");
    let input_value = input === null || input === void 0 ? void 0 : input.value;
    let result = (_a = document.getElementById('result')) === null || _a === void 0 ? void 0 : _a.innerHTML;
    if (value === 'nd') {
        toggle_text();
    }
    else if (value === 'cl') {
        input_value = '';
        result = "";
    }
    else if (value === 'bs') {
        const functions = ['asin(', 'acos(', 'atan(', 'sin(', 'cos(', 'tan(', 'asinh(', 'acosh(', 'atanh(', 'sinh(', 'cosh(', 'tanh(', 'log(', 'ln(', 'abs(', '^2', '√(', '^(', '(-', '^3'];
        for (const func of functions) {
            if (input_value === null || input_value === void 0 ? void 0 : input_value.endsWith(func)) {
                input_value = input_value.slice(0, -func.length);
                return '';
            }
        }
        // If no function match is found, remove the last character
        input_value = input_value === null || input_value === void 0 ? void 0 : input_value.slice(0, -1);
    }
    else if (clicked_id === 'clear-history') {
        clearHistory();
    }
    else if (value === 'deg' || value === 'rad') {
        toggle_unit();
        unit = value;
    }
    else if (input_value === '' && ['+', '-', 'x', '*', '/', '%', '^(', '^2', '!', '^3'].includes(value !== null && value !== void 0 ? value : '')) { // value ?? '' is used to prevent null or undefined value as we an't put it to string
        alert("Invalid format used");
    }
    else if ((input_value === null || input_value === void 0 ? void 0 : input_value.charAt((input_value === null || input_value === void 0 ? void 0 : input_value.length) - 1)) === '(' && ['x', '*', '/', '%', '^(', '^2', '!', '^3'].includes(value !== null && value !== void 0 ? value : '')) {
        alert("Invalid format used");
    }
    else if (input_value === '' && value === '.') {
        input_value += '0';
        input_value += value;
    }
    else if ((input_value === null || input_value === void 0 ? void 0 : input_value.charAt((input_value === null || input_value === void 0 ? void 0 : input_value.length) - 1)) === ')' && ['sin(', 'cos(', 'tan(', '√', '(', 'log(', 'ln(', '(-', 'asin(', 'acos(', 'atan(', 'sinh(', 'cosh(', 'tanh(', 'asinh(', 'acosh(', 'atanh(', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(value !== null && value !== void 0 ? value : '')) {
        input_value += 'x';
        input_value += value;
    }
    else {
        input_value ? input_value += value : input_value = value;
    }
    if (input) {
        input.value = input_value !== null && input_value !== void 0 ? input_value : '';
    }
    return unit;
}
function toggle_unit() {
    let x = document.getElementById("10");
    let value = x === null || x === void 0 ? void 0 : x.getAttribute("value");
    if ((x === null || x === void 0 ? void 0 : x.innerHTML) === "deg") {
        x.innerHTML = "rad";
        value = "rad";
    }
    else if ((x === null || x === void 0 ? void 0 : x.innerHTML) === "rad") {
        x.innerHTML = "deg";
        value = "deg";
    }
}
//togle fuction to toggle buttons when 2nd is clicked
function toggle_text() {
    let y1 = document.getElementById("2");
    let value1 = y1 === null || y1 === void 0 ? void 0 : y1.getAttribute("value");
    if (y1) {
        if (y1.innerHTML === "π") {
            y1.innerHTML = "2<sup>x</sup>";
            value1 = "2^(";
        }
        else {
            y1.innerHTML = "π";
            value1 = "π";
        }
    }
    let y2 = document.getElementById("3");
    let value2 = y2 === null || y2 === void 0 ? void 0 : y2.getAttribute("value");
    if (y2) {
        if (y2.innerHTML === "e") {
            y2.innerHTML = "x<sup>3</sup>";
            value2 = "^3";
        }
        else {
            y2.innerHTML = "e";
            value2 = "e";
        }
    }
    let y3 = document.getElementById("10");
    let value3 = y3 === null || y3 === void 0 ? void 0 : y3.getAttribute("value");
    if (y3) {
        if (y3.innerHTML === "%") {
            y3.innerHTML = "deg";
            value3 = "deg";
        }
        else {
            y3.innerHTML = "%";
            value3 = "%";
        }
    }
    let y4 = document.getElementById("7");
    let value4 = y4 === null || y4 === void 0 ? void 0 : y4.getAttribute("value");
    if (y4) {
        if (y4.innerHTML === "sin") {
            y4.innerHTML = "sin<sup>-1</sup>";
            value4 = "asin(";
        }
        else {
            y4.innerHTML = "sin";
            value4 = "sin(";
        }
    }
    let y5 = document.getElementById("8");
    let value5 = y5 === null || y5 === void 0 ? void 0 : y5.getAttribute("value");
    if (y5) {
        if (y5.innerHTML === "cos") {
            y5.innerHTML = "cos<sup>-1</sup>";
            value5 = "acos(";
        }
        else {
            y5.innerHTML = "cos";
            value5 = "cos(";
        }
    }
    let y6 = document.getElementById("9");
    let value6 = y6 === null || y6 === void 0 ? void 0 : y6.getAttribute("value");
    if (y6) {
        if (y6.innerHTML === "tan") {
            y6.innerHTML = "tan<sup>-1</sup>";
            value6 = "atan(";
        }
        else {
            y6.innerHTML = "tan";
            value6 = "tan(";
        }
    }
    let y7 = document.getElementById("6");
    let value7 = y7 === null || y7 === void 0 ? void 0 : y7.getAttribute("value");
    if (y7) {
        if (y7.innerHTML === "x<sup>2</sup>") {
            y7.innerHTML = "sinh";
            value7 = "sinh(";
        }
        else {
            y7.innerHTML = "x<sup>2</sup>";
            value7 = "^2";
        }
    }
    let y8 = document.getElementById("11");
    let value8 = y8 === null || y8 === void 0 ? void 0 : y8.getAttribute("value");
    if (y8) {
        if (y8.innerHTML === "√x") {
            y8.innerHTML = "cosh";
            value8 = "cosh(";
        }
        else {
            y8.innerHTML = "√x";
            value8 = "√(";
        }
    }
    let y9 = document.getElementById("16");
    let value9 = y9 === null || y9 === void 0 ? void 0 : y9.getAttribute("value");
    if (y9) {
        if (y9.innerHTML === "x<sup>y</sup>") {
            y9.innerHTML = "tanh";
            value9 = "tanh(";
        }
        else {
            y9.innerHTML = "x<sup>y</sup>";
            value9 = "^(";
        }
    }
    let y10 = document.getElementById("21");
    let value10 = y10 === null || y10 === void 0 ? void 0 : y10.getAttribute("value");
    if (y10) {
        if (y10.innerHTML === "|x|") {
            y10.innerHTML = "sinh<sup>-1</sup>";
            value10 = "asinh(";
        }
        else {
            y10.innerHTML = "|x|";
            value10 = "abs(";
        }
    }
    let y11 = document.getElementById("26");
    let value11 = y11 === null || y11 === void 0 ? void 0 : y11.getAttribute("value");
    if (y11) {
        if (y11.innerHTML === "log") {
            y11.innerHTML = "cosh<sup>-1</sup>";
            value11 = "acosh(";
        }
        else {
            y11.innerHTML = "log";
            value11 = "log(";
        }
    }
    let y12 = document.getElementById("31");
    let value12 = y12 === null || y12 === void 0 ? void 0 : y12.getAttribute("value");
    if (y12) {
        if (y12.innerHTML === "ln") {
            y12.innerHTML = "tanh<sup>-1</sup>";
            value12 = "atanh(";
        }
        else {
            y12.innerHTML = "ln";
            value12 = "ln(";
        }
    }
}
