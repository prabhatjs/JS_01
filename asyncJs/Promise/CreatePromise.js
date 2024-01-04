const Cart=["Apple","Banana","Orange"];

let promise=CreateOrder(Cart);//it retrun promisr

promise.then(function(orderID){ //consume a promise
    console.log(orderID);
})
.catch(function(err){
    console.log("Promise Error Handle",err.message);
})

//produce a promise
function CreateOrder(Cart){//this function is return a promise;
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
    return false;
}