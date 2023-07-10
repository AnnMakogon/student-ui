import { TableServiceService } from './../../service/table-service.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { BaseServiceService } from '../../service/base-service.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-student-editor',
  templateUrl: './student-editor.component.html',
  styleUrls: ['./student-editor.component.scss'],
  //standalone: true,
  //imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class StudentEditorComponent implements OnInit {
  editingStudent: Student;
  tableService: any;

  constructor (private baseService: BaseServiceService) {
    this.editingStudent = new Student();
  }

  ngOnInit() {}

  addStudent(): void {
    this.tableService.addNewStudent(this.editingStudent);
    this.editingStudent = new Student();
  }

}
