import { InMemoryDateService } from './service/in-memory-date.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TableFilteringExample } from './src/create-table/create-table.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEditorComponent } from './components/student-editor/student-editor.component';
import { TableStudentsComponent } from './components/table-students/table-students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogEditWrapperComponent } from './components/student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PaginationTableComponent } from './src/pagination-table/pagination-table.component';
import { SortTableComponent } from './src/sort-table/sort-table.component';

import { CommonModule } from '@angular/common';
import { SortPaginFilterComponent } from './src/sort-pagin-filter/sort-pagin-filter.component';
import { MatButtonModule } from '@angular/material/button';
import { NewNewTableComponent } from './components/new-new-table/new-new-table.component';
import { DialogEditWrapperDelComponent } from './components/student-editor/dialog-edit-wrapper-del/dialog-edit-wrapper-del.component';
import { DialogEditWrapperPutComponent } from './components/student-editor/dialog-edit-wrapper-put/dialog-edit-wrapper-put.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentEditorComponent,
    DialogEditWrapperComponent,
    DialogEditWrapperDelComponent,
    DialogEditWrapperPutComponent,
  ],
  imports: [
    NewNewTableComponent,

    SortPaginFilterComponent,
    TableStudentsComponent,
    SortTableComponent,
    PaginationTableComponent,
    TableFilteringExample,
    BrowserModule,
    AppRoutingModule,

    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,

    TableFilteringExample,
    MatButtonModule,

    HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot (
    //  InMemoryDateService, { dataEncapsulation: false }
    //),
    InMemoryWebApiModule.forRoot(InMemoryDateService),
    CommonModule,

    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormsModule],
})
export class AppModule { }
export class MySharedModule {}
