import { Observable} from "rxjs";
const observable = new Observable((subscriber)=>
{
    
subscriber.next(1);
});
console.log('hello');
observable.subscribe({
    next(x){
        console.log('value'+x);
    }
    

})