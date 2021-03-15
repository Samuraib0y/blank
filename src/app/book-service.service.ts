import { Injectable } from '@angular/core';
import {BookListType} from './bookListType'
import {BOOKLIST} from './bookList'
import {Observable, of} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class BookServiceService {


  constructor() { }

  public getBookList() : Observable<BookListType[]>  {

    return of(BOOKLIST)
  }

  public  deleteBook(idBook) {
   BOOKLIST.forEach(function (el,i) {
   if (el.id == idBook) BOOKLIST.splice(i,1)}
   )}


  public pushNewBook(newBookItem, newId){

      newBookItem.value.id = newId;
      BOOKLIST.push(newBookItem.value)
    }
  }

