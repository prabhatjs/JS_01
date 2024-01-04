//* const ShopingCart=["Book","Pen","Box"];

//* //how callback work .createOrder function Create ordreid and this order id pass to placeTopayment
// /**
//  *          --------1st method is-----
//  * createOrder()---orderId genrated 
//  *
//  *  ------------2nd method-------------- 
//  * placeTopayment(orderId)//it takes order id  as a parameter
//  * 
//  * both are syncronous method how to create async we will use call back and how to dependent on each other 
//  * placeTopayment() only call after createOrder() method
//  * 
//  * inverstion of control in some other part of code will call createOrder();
//  */
// createOder(ShopingCart,function(orderid){
//     placeTopayment(orderid);
// });


// /**
//  * this api return the promise and 
//  *  promise is nothing is just a empty object{data:},or undefine  
//  * it is async operation ,after some time promise data is filled when promise is completed after some time*/
// const promise=createOder(ShopingCart)
//*  //here we attaching ower callback function.inside the then function
// promise.then(function(orderId){
//     placeTopayment(orderId);
// })

const Post='https://jsonplaceholder.typicode.com/posts';

const UserPosts=fetch(Post);
console.log(UserPosts);

/**
 * promise is container of future value , promise is an object representing the eventual completion or failour of an async operation
 */

const cart=["Apple","Banana","orange"];

//callback
createOrderApi(cart,function(orderid){
    proceedToPay(orderid,function(payID){
        showOrderItems(payID,function(){
            updateBalance();
        })
    })
})
//how to write in Promise,createOrderApi return a promise
createOrderApi(cart).then(function(orderId){
  return   proceedToPay(orderId)
}).then(function (payinfo){
    return showOrderItems(payinfo)
}).then(function(payinfo){
updateBalance();
})

createOrderApi(cart)
.then((orderId)=>{proceedToPay(orderId)})
.then((payinfo)=>{showOrderItems(payinfo)})
.then((payinfo)=>{
  updateBalance();
})