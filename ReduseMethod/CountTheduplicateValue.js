const name=["Ram","Shyam","Shyam","Ram","Bunty"];

const namecount=(name)=>name.reduce((acc,curr)=>{
    acc[curr]?(acc[curr]+=1):(acc[curr]=1);
    return acc;
},{});

console.log(namecount(name));
//output {"Ram":2,"Shyam":2,"Bunty:1"}