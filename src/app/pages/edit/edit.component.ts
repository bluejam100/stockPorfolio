import { Component } from '@angular/core';
import {StockService} from "../../core/StockService";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {


  constructor (private service: StockService,  private router: Router){}

  editForm = new FormGroup({

    id : new FormControl()

  })


  editForm2 = new FormGroup({

    number : new FormControl(0,[ Validators.min(1)]),
    price : new FormControl(0,[ Validators.min(0.01)]),
    date : new FormControl()
  })

  posts: any;
  transactionLabels: any ;
  transaction: any;
  errormessage:any;
  ngOnInit() {
    this.transactionLabels = [];
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
        this.transactionLabels = this.posts.table.map((transaction: any) => transaction.transactionId);

      },(error)=> {
        this.errormessage = error;
        //console.log(error);
      });


  }

  submitEdit(): void {
    // console.log(+this.deleteForm.value.id);
    // this.service.deleteTransaction(+this.deleteForm.value.id).subscribe((result: any) => {
    //
    //   this.deleteForm.reset({});
    //  })
    console.log(+this.editForm.value.id);
    this.service.getTransaction(+this.editForm.value.id, 1)
      .subscribe(request=>{
        this.transaction = request;
      }, (error)=> {
        this.errormessage = error;
        //console.log(error);
      })
    console.log(this.transaction);
  }

  onConfirmEdit(): void{

    this.service.editTransaction(+this.editForm.value.id, 1, this.editForm2.value).subscribe((result: any) => {
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
