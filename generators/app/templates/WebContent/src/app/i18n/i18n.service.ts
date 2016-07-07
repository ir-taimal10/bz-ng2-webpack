import {Injectable} from '@angular/core';
import {TranslateService} from "ng2-translate/ng2-translate";

@Injectable()
export class I18n {
    private translate:TranslateService;
    public static EN_US = 'en-us';
    public static ES_CO = 'es-co';

    constructor(translate:TranslateService) {
        this.translate = translate;
    }

    public initTranslateResources() {
        var en_us = require('./resources/en-us.json');
        var es_co = require('./resources/es-co.json');
        this.translate.setTranslation(I18n.EN_US, en_us);
        this.translate.setTranslation(I18n.ES_CO, es_co);
    }

    public setLanguage(language) {
        this.translate.use(language);
    }

    public instant(key:string) {
        return this.translate.instant(key);
    }

}
