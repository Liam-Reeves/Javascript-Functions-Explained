
// Scope
function outer (){
    console.log('outer function');
    function inner(){
        console.log('inner function');
    }
    inner();
}
outer();

function doSomething(){
    let x = 10;
    const y= 20;
    var z= 30;

    console.log(x,y,z);
}
doSomething();
// console.log(x,y,z);

var x= 10;
const y = 20;
let z = 30;

function doSomething(){
    console.log(x,y,z);
}
