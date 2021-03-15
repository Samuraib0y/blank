import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BookServiceService} from "../../book-service.service";
import {Guid} from "../../utility/utility";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss'],
})
export class NewBookComponent implements OnInit {


  newBookItem: FormGroup;


  constructor(private bookService: BookServiceService) {

  }


 newId = Guid.newGuid()


  private saveBook(){
    this.bookService.pushNewBook(this.newBookItem, this.newId)
  }








  ngOnInit() {


    // this.nameControl = new FormControl()
    // this.nameControl.valueChanges.subscribe((value => console.log(value)))

    this.newBookItem = new FormGroup({
      ISBN: new FormControl(),
      Book: new FormControl(),
      Publisher: new FormControl(),
      Author: new FormControl(),
      Year: new FormControl(),
    }
    );




      // this.newBookItem.valueChanges.subscribe(value => (value))


    // this.newBookItem.valueChanges.subscribe(value => this.pushNewBook(value))


  }



}
