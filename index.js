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
  let stringFromResult = Evalacos + " ";
  let newresult = stringFromResult.slice(0,8)
  input.value = newresult;
 }


 function atan(){
  let inputValue = input.value;
  let Evalatan= Math.atan(inputValue);
  //input.value = Evalatan
  //we first have to convert the results into a string
  let stringFromResult = Evalatan + " ";
  let newresult = stringFromResult.slice(0,8);
  input.value = newresult;
 }

 function DeleteOne(){
  let inputValue = input.value;
  let DeleteOne= inputValue.slice(0,inputValue.length-1);
  input.value = DeleteOne
 }



  
  
  
  
  
  
  