import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child22',
  templateUrl: './child22.component.html',
  styleUrls: ['./child22.component.css']
})
export class Child22Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Child 22 Loaded');

  }

}
