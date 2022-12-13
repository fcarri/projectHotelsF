import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

  @Input() ciutat:any;

  constructor(){

  }

  ngOnInit(): void {
    console.log('ciutat:',this.ciutat);
    this.ciutat;
    alert(this.ciutat);
  }

}
