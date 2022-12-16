import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],

})
export class MapComponent implements OnInit{

  @Input() ciutat:any;


  display:any;

  constructor(){
    this.ciutat='';

  }

  center: google.maps.LatLngLiteral = {
    lat: 41.38879,
    lng: 2.15899
  };
  zoom = 14;


  moveMap(event: google.maps.MapMouseEvent): void {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  ngOnInit(): void {

    //alert("map.comp "+this.ciutat);
  }

}
