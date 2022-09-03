import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  panelOpenState = false;
  constructor(private router:Router,private route:ActivatedRoute) { }
  isLoaded:boolean = false;

  ngOnInit(): void {
    console.log('parent loaded');
    }

    load(){
      this.isLoaded = !this.isLoaded;
    }


}
