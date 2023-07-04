import { Injectable } from '@angular/core';
import { Student } from './../models/student'

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  private studentsUrl = 'api/students';
  constructor(
   private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  addNewStudent(student: Student): Observable<Student> {
    console.log ('addNewStudent');
    return this.http.post<Student>(this.studentsUrl, student).pipe;
  }
/*
  students: Student[] =[
    {id: 0, name: 'Имя', surname: 'Фамилия'},
    {id: 1, name: 'Имя 1', surname: 'Фамилия 1'},
    {id: 2, name: 'Имя 2', surname: 'Фамилия 2'},
  ]
  constructor() { }

  getAllStudents(): Student[]{
    console.log ('count of Students' + this.students.length);
    return this.students;
  }

  addNewStudent(student: Student): void{
    console.log ('addNewStudent');
    this.students.push(student);
  }*/
}
