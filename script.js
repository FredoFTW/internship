function calculate() {
  let display = document.getElementsByClassName("display")[0];
  let valueOne, valueTwo, operation;

  this.addValue = (val) => {
    if (display.innerHTML.length < 6) {
      if (display.innerHTML === '0') {
        display.innerHTML = '';
      }
      let newValue = display.innerHTML;
      newValue += val;
      display.innerHTML = newValue;
    }
  }

  this.removeValue = () => {
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
  }

  this.clear = () => {
    display.innerHTML = '0';
  }

  this.compute = (op) => {
    valueOne = parseInt(display.innerHTML);
    //alert(op);
    operation = op;
    Calculate.addValue(op);
  }

  this.equate = () => {


    let result = 0;
    let temp = display.innerHTML;
    let index = temp.indexOf(operation);
    valueTwo = temp.substring(index + 1, temp.length);
    valueTwo = parseInt(valueTwo);
    alert("Value one: " + valueOne + "\nValue two: " + valueTwo);

    if (operation === "x") {
      result = valueOne * valueTwo;
    } else if (operation === "-") {
      result = valueOne - valueTwo;
    } else {
      result = valueOne + valueTwo;
    }


    // switch(operation){
    //   case 'x':
    //     result = valueOne * valueTwo;
    //   case '-':
    //     result = valueOne - valueTwo;
    //   case '+':
    //     result = valueOne + valueOne; 
    // }
    display.innerHTML = result;
    valueOne = result;
    console.log(result);
    d
  }


}

let Calculate = new calculate();