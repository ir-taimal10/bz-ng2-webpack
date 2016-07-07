import {Component, ViewEncapsulation} from '@angular/core';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
import {LanguageSelector} from "./i18n/i18n.component";
const COMPONENT_STYLES = require('./app.less');

@Component({
    selector: 'app',
    pipes: [TranslatePipe],
    providers: [],
    encapsulation: ViewEncapsulation.None,
    styles: [COMPONENT_STYLES.toString()],
    directives: [LanguageSelector],
    template: require('./app.html')
})
export class App {
    constructor() {
    }

    ngOnInit() {
    }
}
