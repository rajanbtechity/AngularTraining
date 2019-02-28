import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent} from './employee/employee-list/employee.list.component';
import { EmployeeAddComponent } from './employee/employee-add/employee.add.component';
import { EmployeeService } from './services/employeeService';
import { TestingService } from './services/testingService';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {ConcatPipe} from './pipe/concat.pipe';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule} from '@angular/router'


@NgModule({
    imports :[BrowserModule,
        /*
        RouterModule.forRoot([
            {path:'customer',component:CustomerComponent},
            {path:'employee',component:EmployeeComponent},
        ]),
        */
        RouterModule.forRoot([
            {path:'customer',loadChildren:'src/app/customer/customer.module#CustomerModule'},
            {path:'product',loadChildren:''},
            {path:'employee',component:EmployeeComponent},
            {path:'',component:EmployeeComponent}
        ]),
        FormsModule,ReactiveFormsModule,HttpClientModule],
    declarations:[AppComponent,EmployeeComponent,EmployeeListComponent,EmployeeAddComponent, CustomerComponent,ConcatPipe],
    bootstrap:[AppComponent],
    providers:[EmployeeService,TestingService]
})

export class AppModule{

}