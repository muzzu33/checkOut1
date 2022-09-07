import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  isOpen:boolean = false;
  isOpen1:boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  }
  
  load(){
    this.isOpen=!this.isOpen
  }
  load1(){
    this.isOpen1 =!this.isOpen1
  }
}
