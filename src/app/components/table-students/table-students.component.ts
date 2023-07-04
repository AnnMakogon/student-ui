import { Component, OnInit, Inject } from '@angular/core';
import { Student } from '../../models/student';
import { BaseServiceService } from '../../service/base-service.service';
import { MatDialog } from "@angular/material/dialog";
import { DialogEditWrapperComponent } from '../../components/student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';
import { HttpClient } from '@angular/common/http';
//constructor(@Inject(String) private url: string, private http: Http)
//import { Component, Inject, } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
//import { Inject } from '@angular/core';
//@Inject('url') private url: string;
//constructor(@Inject(String) private url: string, private http: HttpClient) { }

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.scss']
})
export class TableStudentsComponent implements OnInit {
  students: Student[];

  constructor(private baseService: BaseServiceService,
    public dialog: MatDialog,
    @Inject(String) private url: string, private http: HttpClient) {
    this.students = [];
  }

  ngOnInit() {
    console.log ("TableStudentsComponent");
    this.baseService.getAllStudents().subscribe(data => this.students = data);
  }
  addNewStudent() {
    const dialogAddingNewStudent = this.dialog.open(DialogEditWrapperComponent,{
      width: '400px',
      data: null
    });
    dialogAddingNewStudent.afterClosed().subscribe((result: Student)) =>{
      if(result != null) {
        console.log ("adding new student: " + result.name);
        this.baseService.addNewStudent(result).subscribe(k=>
          this.baseService.getAllStudents().subsctibe(data => this.students =
            data) );
      }
    }
  }
}
