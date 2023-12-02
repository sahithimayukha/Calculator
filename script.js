let display=document.getElementById('display');
let input='';

function clearDisplay(){
  input='';
  updateDisplay();
}

function appendToDisplay(value){
  input+=value;
  updateDisplay();
}

function calculate(){
  try {
    var result = eval(input);
    input = String(result);
    updateDisplay();
    } catch(err) {
      input='Error';
      updateDisplay();
    }
}

function updateDisplay() {
  display.value=input;
}

function backspace(){
  if (input!==''){
    input=input.slice(0,-1);
    updateDisplay();
    }
}