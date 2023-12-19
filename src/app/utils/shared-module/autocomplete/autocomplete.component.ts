import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  @Input() suggestions: any[] = [];
  @Output() selected = new EventEmitter<any>();
  dataSources: any[] = [];

  searchTerm = '';

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  onInputChange(): void {
    //utilizo suggestions que es una lista de objetos para filtrar por nombre con searchTerm
    console.log(this.suggestions);
    this.dataSources = this.suggestions.filter((suggestion) => suggestion.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  onSelect(suggestion: any): void {
    this.selected.emit(suggestion);
    this.searchTerm = ''; // Limpiar el término de búsqueda después de seleccionar
  }
}
