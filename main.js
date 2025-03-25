function printMe(){
    console.log("I am a fucntion");
}
printMe(); // I am a function

function printThis(param){
    console.log(param);
}

printThis('Liam');
 

//Fucntion Expression
const stock = function(item1, item2){
    console.log(item1, item2);
}

stock("NVIDIA RTX 5090", "AMD Ryzen 9 5950X");

function sum(a,b){

    let ret= a+b;
    return ret;
}

function calc(a,b){
    
    return (2*(a+b));
    console.log(a,b);
}

calc(50,60);