function greeting(value:any,callBack:any){
    setTimeout(()=>{
        let multiple = value*10;
        callBack(multiple);

    },3000);
}
greeting(10,(result:any)=>{
    console.log(result);

})