import { Directive, ElementRef, OnInit, Renderer2,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string='transparent';
  @Input('appBetterHighlight') highlightColor: string='blue';

  @HostBinding('style.backgroundColor')
  backgroundColor: string | undefined;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

ngOnInit(): void {
  this.backgroundColor=this.defaultColor;
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
}

@HostListener('mouseenter') mouseover(eventDate:Event){
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
  this.backgroundColor=this.highlightColor;
}

@HostListener('mouseleave') mouseleave(eventDate:Event){
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
  this.backgroundColor=this.defaultColor;
}
}
