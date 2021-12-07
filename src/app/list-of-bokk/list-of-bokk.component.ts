import { Component } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-list-of-bokk',
  templateUrl: './list-of-bokk.component.html',
  styleUrls: ['./list-of-bokk.component.css']
})
export class ListOfBokkComponent {
  books = new Array<Book>();
  constructor() { }

  receiveBookEvent($event: Book) {
    this.books.push($event);
  }
}
