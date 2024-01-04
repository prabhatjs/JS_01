///its take callback function and first Fun1 executed and then its call the function show 
//problem with callback is inverstion of control

function Read(callbackWrite){
    console.log("Typing Start");
    setTimeout(()=>{
        callbackWrite();
    },3000)
   
}
function Write(callbackPrinting){
    console.log("Typing Stop");
    console.log("Writing Start");
    setTimeout(()=>{
        callbackPrinting();
    },4000)
    
}
function printing(){
    console.log("Writing Stop");
    console.log("Printing Start");
    setTimeout(()=>{
        console.log("Printing Done");
    },2000)
}
//callback hell...
Read(()=>{
    Write(()=>{
        printing();
    })
});