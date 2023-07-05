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
//import { dataSource } from '';
//import { CreateTableComponent } from './src/create-table/create-table.component';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

//import { PeriodicElement } from './src/create-table/create-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentEditorComponent,
    TableStudentsComponent,
    DialogEditWrapperComponent,
  ],
  imports: [
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
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
