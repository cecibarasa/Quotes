import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpvote]'
})
export class UpvoteDirective {

  constructor(private elem:ElementRef) { }

  

}
