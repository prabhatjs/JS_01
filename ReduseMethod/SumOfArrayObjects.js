const cityPopulation=[
    {cityName:'kanpur',state:'UP',population:3000000},
    {cityName:'Agra',state:'UP',population:2000000},
    {cityName:'Varanashi',state:'UP',population:4000000},
    {cityName:'Noida',state:'UP',population:5000000},
    {cityName:'Lucknow',state:'UP',population:8000000}
]



//1.way of doing 
const totalPopulation=cityPopulation.reduce((accumulator,currentvalue)=>accumulator+currentvalue.population,0);//0 is initial value

//2nd way of doing this
function sumofpeople(accumalator,currentvalue)
{  
    return accumalator+currentvalue.population;
}
const totalpeople=cityPopulation.reduce(sumofpeople,0);
console.log(totalPopulation,totalpeople);