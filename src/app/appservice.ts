 class testing{
    private title ='hai';
    public gettitle(): string{
      return this.title;

    }
    private title1 ='ok';
    public getst():string{
        return this.title1
    }

}
abstract class car{
    public typea: string="belno"
    public getType() : string{
        return this.typea;
    }
    public abstract cost():number;
}

class carm extends car{
    public override typea:string="belno2";
    public cost(): number{
        return 5000;
    }

}
let cartype = new carm();
console.log(cartype.typea);
console.log(cartype.cost());


//   let obj = new testing;
//   console.log(obj.gettitle());
//   console.log(obj.getst());
// // }
