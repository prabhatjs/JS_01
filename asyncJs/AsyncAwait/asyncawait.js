/**
 * async await combine to handle promises
 
before async await promise handle like this;
------------------------------------------------------
 let myPromise=new Promise(function (resolve,reject){
    resolve("My value");
 });

function getData(){
    myPromise.then((res)=>console.log(res));
}
getData();

-------------------------------------------------------------------promises
//!Run this code 
// let myPromise1=new Promise(function (resolve,reject){
//     setTimeout(()=>{
//         resolve("My value");
//     },12000);
   
//  });

// function getDataPromsie(){
//     myPromise1.then(
//        function (res){
//         console.log(res)
//         console.log("hello");
//        }
//         );
//         console.log("promise Not wait"); this will print first then res will be print 
// }
// getDataPromsie();
------------------------------------------------------------------------------------------




await only in async function (imp)

------------------------------------------------------
*/
let mypromise2=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Second Promise");
    },20000);
})


let MyPromise=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Get Back Promise");//in case of async first resolve method execute then any console print;
    },10000);
    //resolve("Get Back Promise");
})

async function getData()
{
    console.log("Hi PSy");
     // after this line all console will wait until resolve method been executed. program will wait 

    const value=await MyPromise;
    console.log("wait Until time is over");
    console.log(value);
    console.log("Hi Your time is over ");

//after 20 sec second promise will executed;
    const value2=await mypromise2;
    console.log("Promise 2 Completed");
    console.log(value2);
}
getData();

//.json()return a promise that why i put await
async function ApiCall(){
    const data=await fetch("Api");
    //change data into json
    const changejson= await data.json();
    console.log(changejson);
}

ApiCall();
