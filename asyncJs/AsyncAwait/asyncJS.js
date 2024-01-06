/**
 * ! async function always return a promise,
 * ! if asynchronous return any value it will wrap the value in promise and return a promise you can return promise as well 
 * 
 * ! await 
 * 
 * 
 * */

async function getOrderDetails(){
    return cart=["apple","orange","shoes","TV","Mobile"];
}

//handle promise 
const datapromise=getOrderDetails();
datapromise.then((res)=>{
    for(let i of res){
        console.log(i);
    }
})

/*---------------------------------Example - 2------------------------------*/

const Pome2=new Promise(function(resolve,reject){
    resolve("I am Woriking as welll");
})

async function RingTheBell(){
    return Pome2;
}
const Pome=RingTheBell();
Pome.then(res=>{
    console.log(res);
})

