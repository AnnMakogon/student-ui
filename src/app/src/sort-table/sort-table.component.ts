import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

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
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatSortModule],
})

export class SortTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'surname'];
  dataSource = new MatTableDataSource( ELEMENT_DATA );

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    }else{
      this._liveAnnouncer.announce('Sorting clearede');
    }
  }
}
