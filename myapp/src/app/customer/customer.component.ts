import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl :'./customer.component.html'
})
export class CustomerComponent implements OnInit {

  isA:boolean;
  isB:boolean;


  ChangeToA()
  {
    this.isA=false;
    this.isB=true;
  }

  ChangeToB()
  {
    this.isB=false;
    this.isA=true;
  }
  constructor() {
    this.isA=false;
    this.isB=true;
   }

  ngOnInit() {
  }

}
