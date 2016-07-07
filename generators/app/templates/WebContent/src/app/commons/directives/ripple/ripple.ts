import {Directive, OnChanges, ElementRef, Input} from '@angular/core';

@Directive({
    selector: '[ripple]',
    host: {
        '(click)': 'onClick($event)'
    }
})
export class Ripple implements OnChanges {
    @Input() duration:number = 500;
    @Input() collapse:boolean;

    private el:HTMLElement;


    constructor(private _element:ElementRef) {
        this.el = _element.nativeElement;
    }

    onClick(event) {
        event.preventDefault();
        var $div = document.createElement("div");
        let elementPosition:any = this.getPosition(this._element.nativeElement);
        var xPos = event.pageX - elementPosition.x;
        var yPos = event.pageY - elementPosition.y;
        var elementHeight = this.el.offsetHeight;
        $div.className = 'ripple-effect';
        $div.style.height = elementHeight + 'px';
        $div.style.width = elementHeight + 'px';
        $div.style.top = (yPos - (elementHeight / 2)) + 'px';
        $div.style.left = (xPos - (elementHeight / 2)) + 'px';
        $div.style.background = this._element.nativeElement.getAttribute('ripple') || "#fffff";
        this.el.appendChild($div);
        setTimeout(() => this.removeRipple($div), 2000);
    }

    private removeRipple(ripple:any) {
        ripple.remove();
    }

    ngOnChanges(changes) {

    }

    private  getPosition(el) {
        var xPosition = 0;
        var yPosition = 0;
        while (el) {
            if (el.tagName == "BODY") {
                // deal with browser quirks with body/window/document and page scroll
                var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
                var yScrollPos = el.scrollTop || document.documentElement.scrollTop;

                xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
                yPosition += (el.offsetTop - yScrollPos + el.clientTop);
            } else {
                xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
                yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
            }
            el = el.offsetParent;
        }
        return {
            x: xPosition,
            y: yPosition
        };
    }
}