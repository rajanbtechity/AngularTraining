let ary1=[1,2,3,4,5,6,7,8,9,10];

let evenNumber:Array<number>=ary1.filter(getEven);

function getEven(x:number):boolean{
    if(x%2==0)
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(evenNumber);

let ary2=[1,2,3,4,5,6,7,8,9,10];
let evenNumber2:Array<number>=ary2.filter(x=>(x%2==0));
console.log(evenNumber2);