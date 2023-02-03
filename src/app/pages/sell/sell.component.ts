import { Component} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {StockService} from "../../core/StockService";
import {Transaction} from "../../Data";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent  {
  errormessage:any;
  constructor (private service: StockService, private router: Router){}
  today : Date = new Date();

  profileForm = new FormGroup({

    name : new FormControl(),
    number : new FormControl(1,[ Validators.min(1)]),
    price : new FormControl(0,[ Validators.min(0)]),
    date : new FormControl()
  })


  onSubmit(): void {
    console.log(this.profileForm.value)
    /// For now every userId will be 1 for the demo, to change if we need we will be using other userId

    this.profileForm.value.date = this.profileForm.value.date.toString()
    // @ts-ignore
    console.log(-Math.abs(+this.profileForm.value.number))
    // @ts-ignore
    this.profileForm.value.number = -Math.abs(+this.profileForm.value.number);

    this.service.sellStock(this.profileForm.value, 1).subscribe((result: Transaction) => {
        //console.log(result);
        this.router.navigate(["/success"])
        //this.profileForm.reset({})
      },
      (error)=> {
        this.errormessage = error;
        //console.log(error);
      }

    )

  }


}

