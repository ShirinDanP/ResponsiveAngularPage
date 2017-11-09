import { Component, OnInit } from '@angular/core';
import { MainService } from '../mainService/main-service.service';
import { InterfaceData } from './../interface-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data: InterfaceData [];
  row: boolean;
  errorMessage: string;

constructor(private dataService: MainService) {
 }

  ngOnInit(): void {
    this.dataService.getAlbums().map(data => {
      this.data = data;
    });
  }
}
