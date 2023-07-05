import { Injectable } from '@angular/core';
import { Student } from './../models/student'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  private studentsUrl = 'api/students';
  constructor(
   private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  addNewStudent(student: Student): Observable<Student> {
    console.log ('addNewStudent');
    return this.http.post<Student>(this.studentsUrl, student).pipe();
  }
}
