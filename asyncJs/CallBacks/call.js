console.log("Hello Prabhat")

//set Time Function take callback as a function and it will exected after 3000ms 

/**
 * why call back is needed ?
 * to create asynchronous code that doesn't block the main thread of execution.
 */
setTimeout(function needTime(){
    console.log("Hello I am executed");
},3000);



console.log("all Task Is done");

/**
 * Example 2
 */
function download(url,downloaded)
{
    console.log(`downloading form url=${url}`);
    setTimeout(() => {
        console.log("Downloading Complete");
        downloaded()
    }, 1000);
}
function cmpressfile(filepath,compresed)
{
    console.log(`compresing ${filepath}`);
        setTimeout(() => {
            console.log(`Compresed and save ${filepath.split('.')[0]+'.zip'}`);  
            compresed()      
        }, 2000);
}
function upload(server,file,upladed)
{
    console.log(`uploding the file ${file} to ${server}`);
    setTimeout(() => {
      
        console.log("File Uplaod successfullly "+file);
        upladed()
    }, 3000);
}

download('Http://wwe.download.com',()=>{
    cmpressfile('myfile.png',()=>{
        upload('http://file.com','myfile.zip',()=>{})
    })
})
