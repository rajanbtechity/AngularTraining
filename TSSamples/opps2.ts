class Customer2
{
    save()
    {
        console.log("Customer Saved");
    }
}

function saveAndLog2(c:Customer2):void
{
    console.log("Before Save");
    c.save();
    console.log("After Save");
}

class Employee{
    save()
    {
        console.log("Employee Saved");
    }
}

let obj2=new Employee();
saveAndLog2(obj2);