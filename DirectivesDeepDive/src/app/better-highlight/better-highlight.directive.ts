import {
  HostListener,
  HostBinding,
  ElementRef,
  Renderer2,
  Directive,
  OnInit,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'darkblue';
  @Input() highlightColor : string = 'lightblue'
  @Input() mouseLeaveColor: string = 'blue';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  ngOnInit() {
    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.mouseLeaveColor;
  }
}
