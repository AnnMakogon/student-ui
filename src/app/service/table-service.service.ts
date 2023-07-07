import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {
 students: Student[] = [
    {id: 0,name: 'name0', surname: 'surname0'},
    {id: 1,name: 'name1', surname: 'surname1'},
    {id: 2,name: 'name2', surname: 'surname2'},
    //const NAMES: string[] =
    /* [
      'name1',
      'name2',
      'name3',
      'name4',
      'name5',
      'name6',
      'name7',
      'Ann',
    ]
   // const SURNAME: string[] = [
      'surname1',
      'surname2',
      'surname3',
      'surname4',
      'surname5',
      'surname6',
      'surname7',
      'Makogon',
    ];*/
  ];
  constructor() { }

  getAllStudents(): Student[] {
    console.log ('count of students' + this.students.length);
    return this.students;
  }
}
