const Cart=["Apple","Banana","Orange"];

let promise=CreateOrder(Cart);//it retrun promisr
//add Promise chaining
promise.then(function(orderID){ //consume a promise
    console.log(orderID);
    return orderID;
})
.then(function(orderID){
    return proceedToPay(orderID);
})
.then(function(payinfo){
    console.log(payinfo)
    return showOrderItems(payinfo);
})
.then(function(payinfo){
    console.log(payinfo);
    return AddCardDetail(payinfo);
})
.then(function(carddetails){
    console.log(carddetails);
})
.catch(function(err){
    console.log("Promise Error Handle",err.message);
})


function proceedToPay(orderID){
    let paypromie=new Promise(function(resolve,reject){
        resolve("Success",orderID);
    })
    return paypromie;
}

function showOrderItems(payinfo){
    let prom=new Promise(function(resolve,reject){
        resolve("Order Show");
    })
    return prom;
}

function AddCardDetail(carddetails){
    let prom=new Promise(function(resolve,reject){
        resolve("Card Number added 01919101");
    })
    return prom;
}


//produce a promise.//this function is return a promise;
function CreateOrder(Cart){
    let mypromise=new Promise(function (resolve,reject){
        if(!validateCart(Cart)){
            const err=new Error("Cart is not Vallid");
            reject(err);
        }
        const ordreid="00913"
        if(ordreid){
            resolve(ordreid);
        }
    });
    return mypromise;
}
function validateCart(Cart)
{
    return true;
}