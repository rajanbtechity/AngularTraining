import { OnInit, Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector:'[mouse-over-color]'
})
export class MouseOverDirective implements OnInit{
    constructor(private e:ElementRef)
    {

    }

    @Input('mouse-over-color') Color='yellow';

    ngOnInit():void{

    }

    @HostListener('mouseover')
    ChangeColor()
    {
        this.e.nativeElement.style.background=this.Color;
    }

    @HostListener('mouseleave')
    ResetColor()
    {
        this.e.nativeElement.style.background='';
    }

}