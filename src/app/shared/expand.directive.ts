import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appExpand]'
})
export class ExpandDirective {
  @HostBinding ('class.open') isOpen:boolean = false;
  @HostListener('click') toggleOpen(){
    this.isOpen=!this.isOpen
  }  
  constructor() { }

}
