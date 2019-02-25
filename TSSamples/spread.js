var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var a3 = [1, 2, 3, 4, 5, 6, 7, 8];
var b3 = a3[0], c3 = a3.slice(1);
console.log(b3);
console.log(c3);
var a4 = [9, 10];
var e = a3.concat(a4);
console.log(e);
var cc = { customerName: "Rajan Kumar", age: "24", height: "5.7" };
var customerName = cc.customerName, age = cc.age;
var dd = __assign({ a: "asd", b: "aaaa" }, cc);
var ee = __assign({}, cc);
console.log(customerName);
