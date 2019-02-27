import {Employee} from '../models/employee';
import { Output } from '@angular/core';
import {EventEmitter} from '@angular/core';


export class EmployeeService
{
    private MyEmployees:Array<Employee>;
    @Output() OnEmployeeUpdate:EventEmitter<void>=new EventEmitter<void>();

    GetEmployees():Array<Employee>
    {
        this.MyEmployees=new Array<Employee>();
        this.MyEmployees.push(new Employee("Rajan","Kumar",27));
        this.MyEmployees.push(new Employee("Sai","Kishore",31));
        this.MyEmployees.push(new Employee("Santosh","Heigrujam",25));
        return this.MyEmployees;

    }

    SaveEmployee(e:Employee)
    {
        this.MyEmployees.push(e);
        this.OnEmployeeUpdate.emit();
    }

    UpdateEmployee()
    {
        this.OnEmployeeUpdate.emit();
    }
    
}