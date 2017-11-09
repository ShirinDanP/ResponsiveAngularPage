import { Component, OnInit } from '@angular/core';
import { MainService } from '../mainService/main-service.service';
import { InterfaceData } from './../interface-data';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {
 data: InterfaceData[]= [];
  constructor(private service: MainService ) { }

  ngOnInit(): void {
    this.service.getAlbums().subscribe((data) => {
      this.data = data;
    });
  }

}
