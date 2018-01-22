import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective implements OnInit {
  @Input()
  type: string;

  constructor(private el: ElementRef) { }

  ngOnInit(){
    console.log(this.el);
    this.el.nativeElement.style.color = "red";
  }
  @HostListener('click')
  onMyFn(){
    const content = this.el.nativeElement.innerText;
    switch(this.type){
      case 'warning':
        console.warn(content);
        break;
      case 'error':
        console.error(content);
        break;
      default:
        console.log(content);
    }
  }

}
