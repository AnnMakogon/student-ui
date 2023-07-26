import { Injectable, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Student } from './../models/student';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService{

  private studentsUrl = 'api/students';
  constructor(
   private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  getOneStudents(student: Student ): Observable<Student> {
    const url = `${this.studentsUrl}/${student.id}`;
    return this.http.post<Student>(url, student);
  }

  addNewStudent(student: Student): Observable<Student> {
    console.log ('addNewStudent');
    return this.http.post<Student>(this.studentsUrl, student ).pipe();
  }

  deleteStudent(id: number): Observable<Student> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.delete<Student>(url).pipe();
  }

  putStudent(student: Student, id: any): Observable<null | Student> {
    console.log ("Put Student " + id);
    id = Number(id);
    return this.http.put<Student>(this.studentsUrl, {id: id, name: student.name, surname: student.surname}, httpOptions).pipe();
  }
}
