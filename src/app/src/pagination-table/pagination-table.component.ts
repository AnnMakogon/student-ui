import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-pagination-table',
  templateUrl: './pagination-table.component.html',
  styleUrls: ['./pagination-table.component.scss'],
  standalone: true,
  imports: [ MatTableModule, MatPaginatorModule ],
})
export class PaginationTableComponent implements AfterViewInit {
  displayedColumns: string [] = ['id', 'name', 'surname'];
  dataSource = new MatTableDataSource<StudentTable>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface StudentTable {
  id: number;
  name: string;
  surname: string;
}

const ELEMENT_DATA: StudentTable[] = [
  { id: 1, name: 'Hydrogen', surname: 'Hidrogenov' },
  { id: 2, name: 'Helium', surname: 'Heliumov' },
  { id: 3, name: 'Lithium', surname: 'Lithiumov' },
  { id: 4, name: 'Beryllium', surname: 'Berylliumov' },
  { id: 5, name: 'Boron', surname: 'Boronov'  },
  { id: 6, name: 'Carbon', surname: 'Carbonov' },
  { id: 7, name: 'Nitrogen', surname: 'Nitrogenov' },
  { id: 8, name: 'Oxygen', surname: 'Oxygenov' },
  { id: 9, name: 'Fluorine', surname: 'Fluorineov' },
  { id: 10, name: 'Neon', surname: 'Neonov' },
];
