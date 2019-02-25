class Customer{
    /*
    customerName:String;
    age:number;

    constructor(custName:String,age:number)
    {
        this.customerName=custName;
        this.age=age;

    }
    */

    constructor(public customerName:String,public age:number)
    {
        
    }

    save():void
    {
        console.log("Customer Name is :"+this.customerName+ " and age is :"+this.age);
    }

}

let obj1=new Customer("Rajan",27);
obj1.save();
