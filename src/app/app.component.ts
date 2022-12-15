import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'projectHotelsF';

  city:any;

  constructor(){
    this.city='Barcelona';
  }

  buscar():void{
    //alert("app.comp "+this.ciutat);

    var iframe = document.createElement('iframe');
    iframe.src = 'https://my.atlistmaps.com/map/1fc716ac-6e9a-4f13-af42-c4c759dfb163?share=true;charset=utf-8,';
    iframe.width='100%'
    iframe.height='690'
    //iframe.style.marginLeft='200px'
    document.body.appendChild(iframe);

  }










}
