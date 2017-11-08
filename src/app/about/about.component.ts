import { Component, OnInit } from '@angular/core';
import { MainService } from '../mainService/main-service.service';
import { InterfaceData } from './../interface-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  products: InterfaceData[] = [];
  row: boolean;
  errorMessage: string;

constructor(private service: MainService) { }

  ngOnInit(): void {
    this.service.getProducts()
            .subscribe (products => {
                this.products = products;
            },
                error => this.errorMessage = <any>error);
}
}
