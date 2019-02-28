import { Component,EventEmitter, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
    selector:"employee-add",
    templateUrl:"./employee.add.component.html"

})

/*
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
*/
export class EmployeeAddComponent{
    Emp:Employee = new Employee('F','L',0);

MyForm: FormGroup=new FormGroup({
    FName:new FormControl('',Validators.required),
    LName:new FormControl(''),
    Age:new FormControl()
});

    @Output() Cancel:EventEmitter<void>= new EventEmitter<void>();
    @Output() Save:EventEmitter<Employee>=new EventEmitter<Employee>();

    HideAddNew(){
        this.Cancel.emit();
    }

    SaveEmployee(){
        const e:Employee=new Employee(this.MyForm.value.FName,this.MyForm.value.LName,this.MyForm.value.Age);
        this.Save.emit(e)
    }

}