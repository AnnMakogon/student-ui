import { DialogEditWrapperComponent } from './../student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';
import { DialogEditWrapperPutComponent } from './../student-editor/dialog-edit-wrapper-put/dialog-edit-wrapper-put.component';
import { BaseServiceService } from './../../service/base-service.service';
import { MatButtonModule } from '@angular/material/button';
import { Student } from './../../models/student';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgForOf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

export interface UserData {
  id: number | null ;
  name: string;
  surname: string;
}

@Component({
  selector: 'app-new-new-table',
  templateUrl: './new-new-table.component.html',
  styleUrls: ['./new-new-table.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule, NgForOf, MatDividerModule, MatFormFieldModule, MatInputModule,
  MatTableModule, MatSortModule, MatPaginatorModule, FormsModule, ReactiveFormsModule],
})

export class NewNewTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'surname', 'actions'];
  dataSource = new MatTableDataSource<Student>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private baseService: BaseServiceService,
    public dialog: MatDialog,
  )
  {
    this.dataSource = new MatTableDataSource();
    this.refreshData();
  }
  ngOnInit(): void {
    console.log ("NewTableStudentComponent");
  }

  refreshData() {
    this.baseService.getAllStudents().subscribe(data => {
      this.dataSource.data = data; // эта штука записывает новое в таблицу по дате
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  /*errror(student: Student ): any {
    student.id = Number(student.id);
    if (student.id > this.dataSource.data.length) {
      alert("такого студента нет");
      return false;
    }
  }*/

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addNewStudent() : void {
    const dialogAddingNewStudent = this.dialog.open(DialogEditWrapperComponent, {
      width: '400px',
      data: null
    });
    dialogAddingNewStudent.afterClosed().subscribe((result: Student) => {
      if(result != null) {
        console.log ("adding new student: " + result.name);
        this.baseService.addNewStudent(result).subscribe(k=>{
          this.refreshData();
        });
      }
    });
  }

  deleteStudent(student: Student): void {
    console.log ("delete this student: " + student.id);
    student.id = Number(student.id);
    this.baseService.deleteStudent(student.id).subscribe(() => {
      this.refreshData();
    })
  }

  putStudent(student: Student): void {
    const dialogPutStudent = this.dialog.open(DialogEditWrapperPutComponent, {
      width: '400px',
      data: null
    });
    dialogPutStudent.afterClosed().subscribe((result: Student) => {
      if (result != null) {
        console.log ("Updata this student: " + student.id);
        this.baseService.putStudent(result, student.id).subscribe(() => {
          this.refreshData();
        });
      }
    });
  }
}
