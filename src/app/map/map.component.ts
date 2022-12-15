import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  template:`<p>{{ciutat}}</p>`
})
export class MapComponent implements OnInit{

  @Input() ciutat:any;

  constructor(){
    this.ciutat='';
  }

  ngOnInit(): void {

    //alert("map.comp "+this.ciutat);
  }

}
