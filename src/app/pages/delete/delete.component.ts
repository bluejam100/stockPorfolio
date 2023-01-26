import { Component, OnInit } from '@angular/core';
import data, {Transaction} from "../../Data";
import {StockService} from "../../core/StockService";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {


  // allTransactions : Transaction[] = data.table
  //
  // allId : number[] = this.allTransactions.map( object => object.id)


  constructor (private service: StockService,  private router: Router){}

  deleteForm = new FormGroup({

    id : new FormControl()

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

  submitDelete(): void {
   // console.log(+this.deleteForm.value.id);
   // this.service.deleteTransaction(+this.deleteForm.value.id).subscribe((result: any) => {
   //
   //   this.deleteForm.reset({});
   //  })
    console.log(+this.deleteForm.value.id);
    this.service.getTransaction(+this.deleteForm.value.id, 1)
      .subscribe(request=>{
        this.transaction = request;
      }, (error)=> {
        this.errormessage = error;
        //console.log(error);
      })
    console.log(this.transaction);
}

 onConfirmDelete(): void{

    this.service.deleteTransaction(+this.deleteForm.value.id).subscribe((result: any) => {
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
