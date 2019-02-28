import { NgModule } from "@angular/core";


@NgModule({
    imports:[CommonModule,RouterModule.forChild([
        {
            path:'',component:ProductComponent
        }
    ])],
    declarations:[ProductComponent],
    exports:[ProductComponent]
})
export class ProductModule
{

}