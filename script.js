

// Accessing the html elements
const numberButtons = document.querySelectorAll('[number]');
const operationButtons = document.querySelectorAll('[operation]');
const equalButton = document.querySelector('[equalsBtn]');
const deleteButton = document.querySelector('[deleteBtn]');
const clearButton = document.querySelector('[clearBtn]');
const previousElement =document.querySelector('[previous-operand]');
const currentElement =document.querySelector('[current-operand]');



let previousEl="";
let currentEl="";
let result =null;
let lastOperation='';
let haveDot =false;

numberButtons.forEach(number =>{
    number.addEventListener('click' ,(e) =>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot=true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        currentEl+=e.target.innerText;
        currentElement.innerText=currentEl;
    })
})


operationButtons.forEach( button => {
    button.addEventListener('click', (e) =>{
        if(!currentEl) result;
        haveDot=false;
        const operationName =e.target.innerText;
        if(previousEl && currentEl && lastOperation){
            mathOperation();
        }else{
            result=parseFloat(currentEl);
        }
         
        clearVar(operationName);
        lastOperation=operationName;
        console.log(result);
       
    })


});

function clearVar(name = ''){
    previousEl+=currentEl + ' ' + name + ' ';
    previousElement.innerText=previousEl;
    currentElement.innerText='';
    currentEl = '';
    currentElement.innerText=result;

}

function mathOperation(){
    if(lastOperation ==='✕' ){
        result = parseFloat(result) * parseFloat(currentEl);
    }else if(lastOperation ==='+'){
        result = parseFloat(result) + parseFloat(currentEl);
    }else if(lastOperation ==='-'){
        result = parseFloat(result) - parseFloat(currentEl);
    }else if(lastOperation ==='÷'){
        result = parseFloat(result) / parseFloat(currentEl);
    }
}


    equalButton.addEventListener('click', (e) =>{
      
        if(!previousEl || !currentEl) return;
        haveDot=false;
        mathOperation();
        clearVar();
        currentElement.innerText=result;
        currentEl='';

       });


       clearButton.addEventListener('click', (e) => {
        previousElement.innerText='';
        currentElement.innerText='';
        previousEl='';
        currentEl='';
        result='';


    })

   
   
    deleteButton.addEventListener('click', (e) =>{
      
        currentElement.innerText="";
        currentEl='';

     
    })




   
   

