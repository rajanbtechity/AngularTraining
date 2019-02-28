import { Component, OnInit, Input } from '@angular/core';
import { Employee} from 'src/app/models/employee';
import { EmployeeService} from '../services/employeeService';
import { TestingService} from '../services/testingService';


@Component({
    selector:"employee",
    templateUrl:"./employee.component.html"
})


export class EmployeeComponent implements OnInit
{
    isHidden:boolean;
    MyEmployees:Array<Employee>;
    @Input() title="My Title";

    /*
    constructor()
    {
        this.isHidden=false;
        this.MyEmployees=new Array<Employee>();
        this.MyEmployees.push(new Employee("Rajan","Kumar",27));
        this.MyEmployees.push(new Employee("Sai","Kishore",31));
        this.MyEmployees.push(new Employee("Santosh","Heigrujam",25));

    }
    */


    constructor(private eService:EmployeeService,private e:TestingService)
    {
       e.increment();

    }

    ngOnInit():void{
        const s=this.title;
        this.isHidden=false;

        /*

        this.eService.GetEmployees().subscribe(x=>
            {
                this.MyEmployees=x
            });
        */
       /*
this.eService.GetEmployees().subscribe((x:Array<Employee>)=>
{
    this.MyEmployees=x;
}
*/
this.RefreshEmployees();
this.eService.OnEmployeeUpdate.subscribe(()=>{
    this.RefreshEmployees();
});


        /*

        this.MyEmployees=this.eService.GetEmployees();
        this.eService.OnEmployeeUpdate.subscribe(()=>
        {
            alert("Grid Refrshed");
            this.MyEmployees=this.eService.GetEmployees();

        }
        );
*/
    }

    private RefreshEmployees()
    {
        this.eService.GetEmployees().subscribe((x:Array<Employee>)=>
        {
            this.MyEmployees=x;
        });
    }


    toggleHidden()
    {
        this.isHidden=!this.isHidden;
    }

    SaveEmployee(e:Employee)
    {
        this.eService.SaveEmployee(e);
    }

    Update()
    {
        this.eService.UpdateEmployee();
    }
}