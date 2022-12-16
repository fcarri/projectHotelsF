import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit{
  title = 'projectHotelsF';

  city:any;

  constructor(){
    this.city=null;
  }

  ngOnInit(): void {

  }

  display:any;

  buscar():void{

    //alert("app.comp "+this.city);

    //var iframe = document.createElement('iframe');
    //iframe.src = 'https://my.atlistmaps.com/map/1fc716ac-6e9a-4f13-af42-c4c759dfb163?share=true;charset=utf-8,';
    //iframe.width='100%'
    //iframe.height='690'
    //document.body.appendChild(iframe);

  }

  home(){
    window.location.href="../index.html"

  }


}
