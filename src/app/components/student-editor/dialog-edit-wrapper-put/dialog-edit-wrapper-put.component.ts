import { Student } from './../../../models/student';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BaseServiceService } from 'src/app/service/base-service.service';

@Component({
  selector: 'app-dialog-edit-wrapper-put',
  templateUrl: './dialog-edit-wrapper-put.component.html',
  styleUrls: ['./dialog-edit-wrapper-put.component.scss']
})
export class DialogEditWrapperPutComponent implements OnInit {
  editingStudent: Student;
  //students: Student[];

  constructor(public dialogRef: MatDialogRef<DialogEditWrapperPutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
    //private baseService: BaseServiceService,
    ){
      this.editingStudent = new Student();
      /*this.students = [];
      this.baseService.getAllStudents().subscribe(data => {this.students = data;
        console.log (this.students);
      });
      this.baseService.getAllStudents().subscribe(data => {this.students = data;
        this.baseService.getOneStudents(this.editingStudent).subscribe(data => {this.editingStudent = data;});
        console.log (this.editingStudent.name);
      });*/
    }

    ngOnInit():void {
     //this.editingStudent = this.students;
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
