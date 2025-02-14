export function keyboardinput(key : string)
{
    var input = document.querySelector('input');
    
    if(key === 'Backspace' && input){
        input.value = input.value.slice(0,-1);
    }
    else if(key === 'Delete' && input){
        input.value = '';
        const resultElement = document.getElementById('result');
        if (resultElement) {
            resultElement.innerHTML = "";
        }
    }
    else if(['Shift','Ctrl','Control','CapsLock','Alt','ArrowDown','ArrowUp','ArrowLeft','ArrowRight'].includes(key)){
        return;
    }
    else if(input && input.value === '' && ['+','-','x','*','/','%','^','!'].includes(key)){
        alert("Invalid format used");
      }
    else if(input && input.value.charAt(input.value.length - 1) === '(' && ['x','*','/','%','^','!'].includes(key)){
    alert("Invalid format used");
    }
    else if(input && input.value === '' && key === '.'){
        input.value += 0;
        input.value += key;
    }
    else if(input && key === '*'){
        input.value += 'x';
    }
    else{
        if(input)
            input.value += key;
    }
}
