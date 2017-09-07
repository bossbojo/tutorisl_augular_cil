import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core'
@Directive({
    selector: '[AppD]',
    inputs:['AppD']
})
export class AppD {
    AppD:string;
    constructor(private eleme: ElementRef) {
    }
    @HostBinding('style.color') color;
    @HostListener('mouseover')
    onmouseover() {
        this.color = this.AppD;
    }
    @HostListener('mouseout')
    onmouseout() {
        this.color = 'black';
    }

}