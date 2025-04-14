let input = document.getElementById('screen');

function toScreen(x){
   input.value += x;
   if(x === "C"){
    input.value = " ";
   }
}


function equal(){
    let inputValue = input.value;
    let inputResult = eval(inputValue);
  
    input.value = inputResult;
  }



  function Sin(){
    let inputValue = input.value;
    let inputResult = Math.sin(inputValue)
    input.value = inputResult;

  }

  
  function Cos(){
    let inputValue = input.value;
    let inputResult = Math.cos(inputValue)
    input.value = inputResult;

  }


  function powerthree(){
    let inputValue = input.value;
    let Cube = inputValue * inputValue * inputValue;
    input.value = Cube;
  }

 function acos(){
  let inputValue = input.value;
  let Evalacos= Math.acos(inputValue);
  input.value = Evalacos
 }


 function atan(){
  let inputValue = input.value;
  let Evalatan= Math.atan(inputValue);
  input.value = Evalatan
 }

 function log(){
  let inputValue = input.value;
  let EvalLog= Math.log(inputValue);
  input.value = EvalLog
 }


  
  
  
  
  
  
  