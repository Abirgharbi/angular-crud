import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import {Book} from '../book';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor() { }
  @Output() bookEvent = new EventEmitter<Book>();
  
  sendBookEvent(author:string, title:string, price:string){
    let book = new Book(author, title, price);  
    this.bookEvent.emit(book);
  }

  ngOnInit(): void {
  }
}
