import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ListOfBokkComponent } from './list-of-bokk/list-of-bokk.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    ListOfBokkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
