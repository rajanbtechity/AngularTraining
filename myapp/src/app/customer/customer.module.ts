import { NgModule } from '@angular/core';
import {CustomerComponent} from './customer.component';


@NgModule(
    {
        declarations:[CustomerComponent],
        exports:[customerModule]
    }
)
export class customerModule
{

}