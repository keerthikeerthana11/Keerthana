let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello');
    },3000)
   

});
promise.then((message)=>
{
    console.log(message);
})