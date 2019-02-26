import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';
@Component({
    selector:"employee-add",
    templateUrl:"./employee.add.component.html"

})
export class EmployeeAddComponent
{
    emp:Employee;
    var1:string="1";
    constructor()
    {
        this.emp=new Employee("Rajan","Kumar",27);
    }


    changeValue()
    {
        this.var1="2";

    }

}