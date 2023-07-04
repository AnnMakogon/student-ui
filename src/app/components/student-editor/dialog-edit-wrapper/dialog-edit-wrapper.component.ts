import { Student } from './../../../models/student';
import { Component, Inject, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MatDialogRef,MAT_DIALOG_DATA } from "@angular/material/dialog";
//import { MatDialogRef,  from '@angular/material';
//import { Student } from '../../models/Student';
//import { dialogRef } from "@angular/material/dialog"

@Component({
  selector: 'app-dialog-edit-wrapper',
  templateUrl: './dialog-edit-wrapper.component.html',
  styleUrls: ['./dialog-edit-wrapper.component.scss'],
})
export class DialogEditWrapperComponent implements OnInit {
  editingStudent: Student;

  constructor(public dialogRef: MatDialogRef<DialogEditWrapperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student
    ){
      this.editingStudent = new Student();
    }

    ngOnInit():void {
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

  //constructor (@Inject(String) private url: string, private http: HttpClient,
  //public dialogRef: MatDialogRef<DialogEditWrapperComponent>,
  //@Inject(MAT_DIALOG_DATA) public data: Student) { }
}

