var a3=[1,2,3,4,5,6,7,8];
var [b3,...c3]=a3;

console.log(b3);
console.log(c3);

var a4=[9,10]

var e=[...a3,...a4]
console.log(e);


var cc={customerName:"Rajan Kumar",age:"24",height:"5.7"};
var {customerName,age}=cc;
var dd={a:"asd",b:"aaaa",...cc};
var ee={...cc};

console.log(customerName);