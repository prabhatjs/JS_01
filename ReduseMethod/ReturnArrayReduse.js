const facebookFrinds=[
    {name:'Prabhat',frinds:['nafar','ankit','sadab'],age:26},
    {name:'Mayank',frinds:['Pawan','ankit','sadab'],age:21},
    {name:'Pawan',frinds:['Lalli','ankit','sadab'],age:22},
    {name:'Dhiru',frinds:['Sanket','ankit','sadab'],age:29}
]

    function totalfrinds(a,c){
        return [...a,...c.frinds];

    }

    const displayFrinds=facebookFrinds.reduce(totalfrinds,[]);
    console.log(displayFrinds);