import { Component} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {StockService} from "../../core/StockService";
import {Transaction} from "../../Data";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {
  errormessage:any;
  constructor (private service: StockService, private router: Router){}
    today : Date = new Date();

  profileForm = new FormGroup({

    name : new FormControl(),
    number : new FormControl(0,[ Validators.min(1)]),
    price : new FormControl(0,[ Validators.min(0.01)]),
    date : new FormControl()
  })


  onSubmit(): void {
   console.log(this.profileForm.value)
    /// For now every userId will be 1 for the demo, to change if we need we will be using other userId

    this.profileForm.value.date = this.profileForm.value.date.toString()

   this.service.addStock(this.profileForm.value, 1).subscribe((result: Transaction) => {
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




