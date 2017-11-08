import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {InterfaceData} from '../interface-data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  InterfaceData: any;
  languages = ['English', 'Swedish', 'Other'];
  constructor() { }

  ngOnInit() {
  }

}
