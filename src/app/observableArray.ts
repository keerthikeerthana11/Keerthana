import { Observable, concat, from,merge,of } from "rxjs";
import { concatMap, filter, map, reduce } from "rxjs/operators";
// const observable = of ([1,2,3,4,5,6,7]);
// const subscription = observable.subscribe((x)=>
// console.log(x));
let sum1 =0;
const source = from ([1,2,3,4,5,6,7,8,9,10]);
 const example = source.pipe(filter(num => num%2 ===0),map(num=> (+num))
 );

const subscri = example.subscribe(val=> console.log(val));














// const source = of ([1,2,3,4,5,6,7,8,9,10]);
//  const example = source.pipe(filter(x => x% 2 ===0),reduce((acc,one)=> 0 ))

//  example.subscribe(x=> console.log(x));






