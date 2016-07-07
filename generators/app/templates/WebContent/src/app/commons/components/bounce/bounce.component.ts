import {Component, Input} from '@angular/core';
const COMPONENT_STYLES = require('./bounce.less');
@Component({
    selector: 'bounce',
    pipes: [],
    styles: [COMPONENT_STYLES.toString()],
    template: require('./bounce.html'),
    directives: []
})
export class Bounce {
    @Input() type:string;
}