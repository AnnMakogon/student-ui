import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    TableFilteringExample
  ],
})

export class TableFilteringExample {
  displayedColumns: string[] = ['id', 'name', 'surname'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
