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
    x:boolean;
    hiddenVar:boolean;
    constructor()
    {
        this.emp=new Employee("Rajan","Kumar",27);
        this.x=false;
        this.hiddenVar=false;
    }


    changeValue()
    {
        this.var1="2";

    }

    toggleValue()
    {
        this.x=!this.x;
    }

    togglehiddenVar()
    {
        this.hiddenVar=!this.hiddenVar;
    }

}