interface IPerson
{
    save();
};

class Customer3 implements IPerson{
    customerName:string;
    save()
    {

    }
}


class Employee3 implements IPerson{
    employeeName:string;
    save()
    {
        
    }
}

function saveAndLog<T extends IPerson>(c1:Customer3,c2:Customer3)
{

}