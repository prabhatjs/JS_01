const fruitPrice=[1,2,3,5];
            //accumulator=0,currentvalue is array value=1 
const sum=(accumulator,currentvalue)=>accumulator+currentvalue;

const totla=fruitPrice.reduce(sum,0);//reduse function take callback function
console.log(totla);
/*
!dry run
accumulator=0
currentvalue=1
sum = 0+1 = 1
now 
accumulator=1
currentvalue=2
sum=3
now
accumulator=3
currentvalue=3
sum=3+3=6
now
accumulator=6
currentvalue=5
sum=6+5=11
*/
