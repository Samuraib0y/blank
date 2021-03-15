import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookComponent } from './book.component';
import { BookRoutingModule } from './book-routing.module';
import {BookItemComponent} from "../home/book-item/book-item.component";
import {HomePage} from "../home/home.page";
import {NewBookComponent} from "./newbook/new-book.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BookComponent, BookItemComponent, HomePage, NewBookComponent]
})
export class BookModule {}
