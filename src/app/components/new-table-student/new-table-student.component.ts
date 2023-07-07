import { Student } from '../../models/student';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface UserData {
  id: string;
  name: string;
  surname: string;
}

const NAMES: string[] = [
  'name1',
  'name2',
  'name3',
  'name4',
  'name5',
  'name6',
  'name7',
  'Ann',
];

const SURNAME: string[] = [
  'surname1',
  'surname2',
  'surname3',
  'surname4',
  'surname5',
  'surname6',
  'surname7',
  'Makogon',
];

@Component({
  selector: 'app-new-table-student',
  templateUrl: './new-table-student.component.html',
  styleUrls: ['./new-table-student.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,
  MatTableModule, MatSortModule, MatPaginatorModule],
})
export class NewTableStudentComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'surname'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!:  MatPaginator;
  @ViewChild(MatSort) sort!:  MatSort;

  constructor() {
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

function createNewUser(id: number): UserData {
    const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    const surname =
    SURNAME[Math.round(Math.random() * (SURNAME.length - 1))] + ' ' +
    SURNAME[Math.round(Math.random() * (SURNAME.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    surname: surname,
  };
}
