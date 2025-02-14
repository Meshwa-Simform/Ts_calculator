import { clearHistory } from "./history.js";

export function reply(clicked_id: string, unit: string): string {
    let input: HTMLInputElement | null = document.querySelector('input');
    let elm: HTMLElement | null = document.getElementById(clicked_id);
    let value: string | null | undefined = elm?.getAttribute("value");
    let input_value: string | undefined | null = input?.value;
    let result: string | undefined = document.getElementById('result')?.innerHTML;

    if (value === 'nd') {
        toggle_text();
    } else if (value === 'cl') {
        input_value = '';
        result = "";
    } else if (value === 'bs') {
        const functions = ['asin(', 'acos(', 'atan(', 'sin(', 'cos(', 'tan(', 'asinh(', 'acosh(', 'atanh(', 'sinh(', 'cosh(', 'tanh(', 'log(', 'ln(', 'abs(', '^2', '√(', '^(', '(-', '^3'];
        for (const func of functions) {
            if (input_value?.endsWith(func)) {
                input_value = input_value.slice(0, -func.length);
                return '';
            }
        }
        // If no function match is found, remove the last character
        input_value = input_value?.slice(0, -1);
    } else if (clicked_id === 'clear-history') {
        clearHistory();
    } else if (value === 'deg' || value === 'rad') {
        toggle_unit();
        unit = value;
    } else if (input_value === '' && ['+', '-', 'x', '*', '/', '%', '^(', '^2', '!', '^3'].includes(value ?? '')) {  // value ?? '' is used to prevent null or undefined value as we an't put it to string
        alert("Invalid format used");
    } else if (input_value?.charAt(input_value?.length - 1) === '(' && ['x', '*', '/', '%', '^(', '^2', '!', '^3'].includes(value ?? '')) {
        alert("Invalid format used");
    } else if (input_value === '' && value === '.') {
        input_value += '0';
        input_value += value;
    } else if (input_value?.charAt(input_value?.length - 1) === ')' && ['sin(', 'cos(', 'tan(', '√', '(', 'log(', 'ln(', '(-', 'asin(', 'acos(', 'atan(', 'sinh(', 'cosh(', 'tanh(', 'asinh(', 'acosh(', 'atanh(', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(value ?? '')) {
        input_value += 'x';
        input_value += value;
    } else {
        input_value ? input_value += value : input_value = value;
    }

    if (input) {
        input.value = input_value ?? '';
    }

    return unit;
}

function toggle_unit() {
    let x :HTMLButtonElement|HTMLElement|null = document.getElementById("10");
    let value: string | null | undefined = x?.getAttribute("value");
    if (x?.innerHTML === "deg") {
        x.innerHTML = "rad";
        value = "rad";

    } else if(x?.innerHTML === "rad"){
        x.innerHTML = "deg";
        value = "deg";
    }
}
//togle fuction to toggle buttons when 2nd is clicked
function toggle_text() {
    let y1:HTMLButtonElement|HTMLElement|null = document.getElementById("2");
    let value1: string | null | undefined = y1?.getAttribute("value");
    if (y1) {
        if (y1.innerHTML === "π") {
            y1.innerHTML = "2<sup>x</sup>";
            value1 = "2^(";
        } else {
            y1.innerHTML = "π";
            value1 = "π";
        }
    }

    let y2:HTMLButtonElement|HTMLElement|null = document.getElementById("3");
    let value2: string | null | undefined = y2?.getAttribute("value");
    if (y2) {
        if (y2.innerHTML === "e") {
            y2.innerHTML = "x<sup>3</sup>";
            value2 = "^3";

        } else {
            y2.innerHTML = "e";
            value2 = "e";
        }
    }

    let y3:HTMLButtonElement|HTMLElement|null = document.getElementById("10");
    let value3: string | null | undefined = y3?.getAttribute("value");
    if(y3){
        if (y3.innerHTML === "%") {
            y3.innerHTML = "deg";
            value3 = "deg";

        }
        else {
            y3.innerHTML = "%";
            value3 = "%";
        }
    }

    let y4:HTMLButtonElement|HTMLElement|null = document.getElementById("7");
    let value4: string | null | undefined = y4?.getAttribute("value");
    if (y4) {
        if (y4.innerHTML === "sin") {
            y4.innerHTML = "sin<sup>-1</sup>";
            value4 = "asin(";

        } else {
            y4.innerHTML = "sin";
            value4 = "sin(";
        }
    }

    let y5:HTMLButtonElement|HTMLElement|null = document.getElementById("8");
    let value5: string | null | undefined = y5?.getAttribute("value");
    if(y5){
        if (y5.innerHTML === "cos") {
            y5.innerHTML = "cos<sup>-1</sup>";
            value5 = "acos(";

        } else {
            y5.innerHTML = "cos";
            value5 = "cos("
        }
    }

    let y6:HTMLButtonElement|HTMLElement|null = document.getElementById("9");
    let value6: string | null | undefined = y6?.getAttribute("value");
    if(y6){
        if (y6.innerHTML === "tan") {
            y6.innerHTML = "tan<sup>-1</sup>";
            value6 = "atan(";

        } else {
            y6.innerHTML = "tan";
            value6 = "tan("
        }
    }

    let y7:HTMLButtonElement|HTMLElement|null = document.getElementById("6");
    let value7: string | null | undefined = y7?.getAttribute("value");
    if(y7){
        if (y7.innerHTML === "x<sup>2</sup>") {
            y7.innerHTML = "sinh";
            value7 = "sinh(";

        } else {
            y7.innerHTML = "x<sup>2</sup>";
            value7 = "^2"
        }
    }

    let y8:HTMLButtonElement|HTMLElement|null = document.getElementById("11");
    let value8: string | null | undefined = y8?.getAttribute("value");
    if(y8){
        if (y8.innerHTML === "√x") {
            y8.innerHTML = "cosh";
            value8 = "cosh(";

        } else {
            y8.innerHTML = "√x";
            value8 = "√(";
        }
    }

    let y9:HTMLButtonElement|HTMLElement|null = document.getElementById("16");
    let value9: string | null | undefined = y9?.getAttribute("value");
    if(y9){
        if (y9.innerHTML === "x<sup>y</sup>") {
            y9.innerHTML = "tanh";
            value9 = "tanh(";

        } else {
            y9.innerHTML = "x<sup>y</sup>";
            value9 = "^(";
        }
    }

    let y10:HTMLButtonElement|HTMLElement|null  = document.getElementById("21");
    let value10: string | null | undefined = y10?.getAttribute("value");
    if(y10){
        if (y10.innerHTML === "|x|") {
            y10.innerHTML = "sinh<sup>-1</sup>";
            value10 = "asinh(";

        } else {
            y10.innerHTML = "|x|";
            value10 = "abs(";
        }
    }

    let y11:HTMLButtonElement|HTMLElement|null = document.getElementById("26");
    let value11: string | null | undefined = y11?.getAttribute("value");
    if(y11){
        if (y11.innerHTML === "log") {
            y11.innerHTML = "cosh<sup>-1</sup>";
            value11 = "acosh(";

        } else {
            y11.innerHTML = "log";
            value11 = "log(";
        }
    }

    let y12:HTMLButtonElement|HTMLElement|null = document.getElementById("31");
    let value12: string | null | undefined = y12?.getAttribute("value");
    if(y12){
        if (y12.innerHTML === "ln") {
            y12.innerHTML = "tanh<sup>-1</sup>";
            value12 = "atanh(";

        } else {
            y12.innerHTML = "ln";
            value12 = "ln("
        }
    }
}