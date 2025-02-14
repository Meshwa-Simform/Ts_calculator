// class for binary operators
class calculate_binary {
    constructor(number1, number2) {
        this.addition = () => {
            return this.number1 + this.number2;
        };
        this.substract = () => {
            return this.number1 - this.number2;
        };
        this.multiply = () => {
            return this.number1 * this.number2;
        };
        this.divide = () => {
            try {
                if (this.number2 === 0) {
                    throw new Error("Cannot divide by 0");
                }
                else {
                    return this.number1 / this.number2;
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                    return "Error: " + error.message;
                }
            }
        };
        this.power = () => {
            return Math.pow(this.number1, this.number2);
        };
        this.modulus = () => {
            return this.number1 % this.number2;
        };
        this.number1 = number1;
        this.number2 = number2;
    }
}
// class for pi and e
class calculate {
    constructor() {
        this.pi = () => {
            return Math.PI;
        };
        this.e = () => {
            return Math.E;
        };
    }
}
// class foe unary operators
class calculate_unary {
    constructor(number) {
        this.number = number;
    }
    factorial() {
        let number = this.number;
        let fac = 1;
        if (number === 0) {
            return 1;
        }
        for (let i = 1; i <= number; i++) {
            fac = fac * i;
        }
        return fac;
    }
    squareroot() {
        return Math.sqrt(this.number);
    }
    sin() {
        return Math.sin(this.number);
    }
    cos() {
        return Math.cos(this.number);
    }
    tan() {
        return Math.tan(this.number);
    }
    abs() {
        return Math.abs(this.number);
    }
    log() {
        return Math.log10(this.number);
    }
    ln() {
        return Math.log(this.number);
    }
    asin() {
        return Math.asin(this.number);
    }
    acos() {
        return Math.acos(this.number);
    }
    atan() {
        return Math.atan(this.number);
    }
    sinh() {
        return Math.sinh(this.number);
    }
    cosh() {
        return Math.cosh(this.number);
    }
    tanh() {
        return Math.tanh(this.number);
    }
    asinh() {
        return Math.asinh(this.number);
    }
    acosh() {
        return Math.acosh(this.number);
    }
    atanh() {
        return Math.atanh(this.number);
    }
}
export { calculate, calculate_binary, calculate_unary };
