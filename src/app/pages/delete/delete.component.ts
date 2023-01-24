import { Component } from '@angular/core';
import data, {Transaction} from "../../Data";
import {StockService} from "../../core/StockService";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {


  allTransactions : Transaction[] = data.table

  allId : number[] = this.allTransactions.map( object => object.id)


  constructor (private service: StockService){}

  deleteForm = new FormGroup({

    id : new FormControl()

  })


  submitDelete(): void {
   // console.log(+this.deleteForm.value.id);
   this.service.deleteTransaction(+this.deleteForm.value.id).subscribe((result: any) => {

     this.deleteForm.reset({});
    })


}
}
