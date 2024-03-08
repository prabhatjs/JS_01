const facebookFrinds=[
    {name:'Prabhat',frinds:['nafar','ankit','sadab'],age:26},
    {name:'Mayank',frinds:['Pawan','ankit','sadab'],age:21},
    {name:'Pawan',frinds:['Lalli','ankit','sadab'],age:22},
    {name:'Dhiru',frinds:['Sanket','ankit','sadab'],age:29}
]

const displayFrinds=(facebookFrinds)=>facebookFrinds.reduce((listoffrinds,{name,frinds,age})=>{return [...listoffrinds,...frinds]},[])
console.log(displayFrinds(facebookFrinds));