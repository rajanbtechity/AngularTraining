import { Component,EventEmitter,Output,Input } from '@angular/core';
import { Employee} from 'src/app/models/employee';


@Component({
    selector:"employee-list",
    templateUrl:"./employee.list.component.html"

})
export class EmployeeListComponent
{

    @Input() Employees:Array<Employee>;
    @Output()listHiddenOutVar:EventEmitter<void>=new EventEmitter<void>();

    /*
    constructor()
    {
        this.Employees=new Array<Employee>();

        this.Employees.push(new Employee("Rajan","Kumar",27));
        this.Employees.push(new Employee("Sai","Kishore",31));
        this.Employees.push(new Employee("Santosh","Heigrujam",25));
    }

    */

    ShowAdd()
    {
        this.listHiddenOutVar.emit();
    }

}