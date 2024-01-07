//memoization function take function as an argument its callback, and its return also a function and that complete process its example of pure function
    /**take argument we use ... rest operator , and memoization function consept
     like it have a cache and when we pass a argument and memoization function 
     check pass argument is in cache memory or not ,we store data as a key value pair key is value
     */
function Memoization(fun)
{
     const cache=new Map();
    //  console.log(fun);
    
    return function(...value)
    {
    const key=value.toString();
    // console.log("Key->",key);
    if(cache.has(key))
    {
      return cache.get(key);
    }
        cache.set(key,fun(...value))
        return cache.get(key);
}
}

function fibo(number){
    if(number<2)
    {
        return number;
    }
    else{
       return fibo(number-1)+(number-2);
       
    }
}
//memoziation function (take function (){return function(){}})
const numfibo=Memoization(fibo);
console.log(numfibo(7));
console.log(numfibo(50));
console.log(numfibo(50));
console.log(numfibo(50));
// console.log(numfibo);