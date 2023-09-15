import { Observable } from "rxjs";
const observable = new Observable((subscriber)=>{
    console.log('hai');
    subscriber.next(1);

});
console.log('before');
observable.subscribe({
    next(x){
        console.log('value'+x);
    }

})