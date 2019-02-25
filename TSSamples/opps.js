var Customer = /** @class */ (function () {
    /*
    customerName:String;
    age:number;

    constructor(custName:String,age:number)
    {
        this.customerName=custName;
        this.age=age;

    }
    */
    function Customer(customerName, age) {
        this.customerName = customerName;
        this.age = age;
    }
    Customer.prototype.save = function () {
        console.log("Customer Name is :" + this.customerName + " and age is :" + this.age);
    };
    return Customer;
}());
var obj1 = new Customer("Rajan", 27);
obj1.save();
