import { InMemoryDateService } from './service/in-memory-date.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEditorComponent } from './components/student-editor/student-editor.component';
import { TableStudentsComponent } from './components/table-students/table-students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogEditWrapperComponent } from './components/student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { DialogService } from './service/dialog.service';


//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    StudentEditorComponent,
    TableStudentsComponent,
    DialogEditWrapperComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot (
      InMemoryDateService, { dataEncapsulation: false }
    )
  ],
  providers: [
    /*{
      provide: MatDialogModule,
      useValue: {}
    },*/
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
