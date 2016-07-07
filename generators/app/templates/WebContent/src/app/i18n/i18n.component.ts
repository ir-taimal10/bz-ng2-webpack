import {Component} from '@angular/core';
import {I18n} from "./i18n.service";
import {TranslatePipe} from "ng2-translate/ng2-translate";
import {Ripple} from "../commons/directives/ripple/ripple";
const COMPONENT_STYLES = require('./i18n.less');
@Component({
    selector: 'language-selector',
    pipes: [TranslatePipe],
    styles: [COMPONENT_STYLES.toString()],
    template: require('./i18n.html'),
    directives: [Ripple]
})
export class LanguageSelector {
    private language:string;

    constructor(private i18n:I18n) {
    }

    ngOnInit() {
        this.language = I18n.EN_US;
        this.i18n.initTranslateResources();
        this.i18n.setLanguage(this.language);

    }

    changeResource(newlanguage) {
        this.language = newlanguage;
        this.i18n.setLanguage(this.language);
    }


}