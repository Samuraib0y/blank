import {Component, OnInit} from '@angular/core';
import {BookListType} from "../../bookListType";
import {BookServiceService} from "../../book-service.service";





@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent{

 public bookList: BookListType[];





  constructor(private bookService: BookServiceService) {
  }
  private getBookList(): void{
    this.bookService.getBookList()
      .subscribe(bookList => this.bookList = bookList)
  }


  private getId(idBook){
    this.bookService.deleteBook(idBook)
  }


  ngOnInit(){
    this.getBookList()
  }

}
