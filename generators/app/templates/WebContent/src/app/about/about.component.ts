import {Component} from '@angular/core';

console.log('`About` component loaded asynchronously');
const COMPONENT_STYLES = require('./about.less');

@Component({
    selector: 'about',
    styles: [COMPONENT_STYLES.toString()],
    template: require('./about.html')
})
export class About {
    constructor() {

    }

    ngOnInit() {
        console.log('hello `About` component');
    }

}
