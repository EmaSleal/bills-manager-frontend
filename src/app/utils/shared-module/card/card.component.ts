import { Component, Input, OnInit } from '@angular/core';
import {  BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  exportAs: 'appCard'
})
export class CardComponent implements OnInit {


  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
  }

  @Input() title: string | undefined;



}
