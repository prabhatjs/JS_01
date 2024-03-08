const number=[1,3,2,4,5,1,11];

function sum(accumalator,currentvalue){
    if(currentvalue%2==0){
        return currentvalue;
    }
    else{
        return sum=accumalator+currentvalue;
    }
}

const total=number.reduce(sum,0); 
console.log(total);