import { Component,EventEmitter, Output } from '@angular/core';
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
    @Output() addHiddenOutVar:EventEmitter<void>=new EventEmitter<void>();
    @Output() Save:EventEmitter<Employee>=new EventEmitter<Employee>();
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

    ShowList()
    {
        this.addHiddenOutVar.emit();
    }

    SaveEmployee()
    {
        const e:Employee=new Employee("F1","L1",22);
        this.Save.emit(e);
        this.addHiddenOutVar.emit();

    }


}