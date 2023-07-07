import { InMemoryDateService } from './service/in-memory-date.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
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
import { NewTableStudentComponent } from './components/new-table-student/new-table-student.component';
//import { MatTable } from '@angular/material/table'
//import { BrowserModule } from '@angular/platform-browser';
//import { dataSource } from '';
//import { CreateTableComponent } from './src/create-table/create-table.component';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

//import { PeriodicElement } from './src/create-table/create-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentEditorComponent,
    //TableStudentsComponent,
    DialogEditWrapperComponent,
  ],
  imports: [

    NewTableStudentComponent,
    SortPaginFilterComponent,
    //StudentEditorComponent,
    //HouseModule,
    TableStudentsComponent,
    SortTableComponent,
    PaginationTableComponent,
    TableFilteringExample,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    TableFilteringExample,
    HttpClientInMemoryWebApiModule.forRoot (
      InMemoryDateService, { dataEncapsulation: false }
    ),
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
  //declarations: []
})
export class AppModule { }
//export class ProductModule { }
export class MySharedModule {}
