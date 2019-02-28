import {Employee} from '../models/employee';
import { Output, Injectable } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import {map} from 'rxjs/operators';
/*

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
*/

export class EmployeeService
{
    private MyEmployees:Array<Employee>;
    OnEmployeeUpdate:EventEmitter<void>=new EventEmitter<void>();

    constructor(private http:HttpClient)
    {

    }

/*
    GetEmployees():Observable<any>
    {
        const URL="http://demoapi.justcompile.com/api/employee"
        return this.http.get(URL);
    }
    */

GetEmployees():Observable<Array<Employee>>
{
    const URL="http://demoapi.justcompile.com/api/employee"
        return this.http.get(URL).pipe(
            map((x:Array<any>)=>
            {
                return x.map(y=> new Employee(y.fName,y.lName,y.age));
            }

            )
        );
}


SaveEmployee(e:Employee)
{
    /*
    this.MyEmployees.push(e);
    this.OnEmployeeUpdate.emit();
    */

    const URL="http://demoapi.justcompile.com/api/employee";
    const newEmployee={fName:e.Fname,lName:e.Lname,age:e.Age};

    return this.http.post(URL,newEmployee).subscribe(()=>{
            this.OnEmployeeUpdate.emit();
        }
    );
}

UpdateEmployee()
{
    this.OnEmployeeUpdate.emit();
}

}
   
    