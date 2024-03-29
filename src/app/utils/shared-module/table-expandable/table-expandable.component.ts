import { Component, Input, Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Factura } from 'src/app/model/factura/factura';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-table-expandable',
  templateUrl: './table-expandable.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

  styleUrls: ['./table-expandable.component.scss']
})
export class TableExpandableComponent implements OnChanges {

   displayedColumns =['nombreCliente', 'direccion', 'telefono', 'fecha','lineas','pagado','entregado','total', 'acciones'];
   displayedColumns2 =['cantidad','nombre','precio','total']
  columnsToDisplayWithExpand =[...this.displayedColumns, 'expand']
  @Input() dataSource!: any[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Output() editItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteItem: EventEmitter<any> = new EventEmitter<any>();

  tableDataSource!: MatTableDataSource<any>;
  expandedElement: Factura | undefined;

  fechaHoyFilter: Date = new Date();
  fechaInicioFilter: Date = new Date();
  fechaFinFilter: Date = new Date();

  constructor() {
    this.tableDataSource = new MatTableDataSource(this.dataSource);
    
  }

  ngOnChanges() {
    this.tableDataSource = new MatTableDataSource(this.dataSource);
    this.tableDataSource.paginator = this.paginator;
    this.tableDataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
    if (this.tableDataSource.paginator) {
      this.tableDataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.tableDataSource.paginator = this.paginator;
    this.tableDataSource.sort = this.sort;
  }

  editarFila(row: any) {
    this.editItem.emit(row);
  }

  eliminarFila(row: any) {
    this.deleteItem.emit(row);
  }

  applyFechaHoyFilter() {
    this.tableDataSource.filter = '';

    if (this.fechaHoyFilter) {
      const hoy = new Date().toLocaleDateString();
      this.tableDataSource.data = this.dataSource.filter(item => {
        const fechaItem = new Date(item.fecha).toLocaleDateString();
        return fechaItem === hoy;
      });
    }
  }

  // Nuevo método para aplicar el filtro de rango de fechas
  applyFechaRangoFilter() {
    this.tableDataSource.filter = '';

    if (this.fechaInicioFilter && this.fechaFinFilter) {
      this.tableDataSource.data = this.dataSource.filter(item => {
        const fechaItem = new Date(item.fecha);
        return fechaItem >= this.fechaInicioFilter! && fechaItem <= this.fechaFinFilter!;
      });
    }
  }

}
