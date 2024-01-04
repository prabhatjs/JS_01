console.log("1")
function Test(){
    console.log("2");
 return  new Promise(function(resolve,reject){
    resolve("3");
    setTimeout(()=>{
        console.log("3");
    },4000);
 });

//  return P;
}

let promise=Test();
promise.then(function (val){
console.log(val);
})



// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');