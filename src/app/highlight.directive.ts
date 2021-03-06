import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }
  @Input() highlightColor: string;

  @HostListener('click') onClick(){
    this.textDeco('highlight')
  }

  private textDeco(color:string) {
    this.elem.nativeElement.style.background = this.highlightColor;
    
  }

}
