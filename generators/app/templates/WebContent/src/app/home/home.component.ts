import {Component} from '@angular/core';
import {TranslatePipe} from "ng2-translate/ng2-translate";
import {Bounce} from "../commons/components/bounce/bounce.component";
import {Ripple} from "../commons/directives/ripple/ripple";
const COMPONENT_STYLES = require('./home.less');
@Component({
    selector: 'home',
    pipes: [TranslatePipe],
    styles: [COMPONENT_STYLES.toString()],
    template: require('./home.html'),
    directives: [Bounce, Ripple]
})
export class Home {
    public clickCounter:number = 0;

    constructor() {
    }

    ngOnInit() {
    }

    performClick() {
        console.log('performClick');
        this.clickCounter += 1;
    }
}