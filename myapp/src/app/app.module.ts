import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent} from './employee/employee-list/employee.list.component';
import { EmployeeAddComponent } from './employee/employee-add/employee.add.component';
import { EmployeeService } from './services/EmployeeService';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
    imports :[BrowserModule],
    declarations:[AppComponent,EmployeeComponent,EmployeeListComponent,EmployeeAddComponent, CustomerComponent],
    bootstrap:[AppComponent],
    providers:[EmployeeService]
})

export class AppModule{

}