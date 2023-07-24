let promise = new Promise((resolve,reject)=>{
    resolve('hello');

});
promise.then((message)=>
{
    console.log(message);
})