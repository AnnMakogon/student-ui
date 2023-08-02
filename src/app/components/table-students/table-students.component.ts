//import { TableServiceService } from './../../service/table-service.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Student } from '../../models/student';
import { BaseServiceService } from '../../service/base-service.service';
import { MatDialog } from "@angular/material/dialog";
import { DialogEditWrapperComponent } from '../../components/student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgForOf } from "@angular/common";

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, NgForOf],
})
export class TableStudentsComponent implements OnInit {

  students: Student[];
  TableServiceService: any;

  constructor(private baseService: BaseServiceService,
    public dialog: MatDialog,
    private http: HttpClient
    ) {
    this.students = [];
    }

  ngOnInit() {
    console.log ("TableStudentsComponent");
    this.baseService.getAllStudents().subscribe(data => this.students = data);
    //new Proxy
  }

  /*ngOnInit() {
    console.log ("newTableStudentComponent");
    this.students = this.TableServiceService();
  }*/

  addNewStudent(): void {
    const dialogAddingNewStudent = this.dialog.open(DialogEditWrapperComponent,{
      width: '400px',
      data: null
    });
    dialogAddingNewStudent.afterClosed().subscribe((result: Student) =>{
      if(result != null) {
        console.log ("adding new student: " + result.fio);
        this.baseService.addNewStudent(result).subscribe(k=>
          this.baseService.getAllStudents().subscribe(data => this.students = data)
        );
      }
    });
  }
}
