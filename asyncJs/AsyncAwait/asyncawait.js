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

await only in async function (imp)

------------------------------------------------------
*/
let MyPromise=new Promise(function(resolve,reject){
    resolve("Get Back Promise");
})

async function getData()
{
    const value=await MyPromise;
    console.log(value);
}
getData();