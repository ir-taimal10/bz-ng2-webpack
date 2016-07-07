import {
    beforeEachProviders,
    inject,
    it
} from '@angular/core/testing';

// Load the implementations that should be tested
import {App} from './app.component';
import {AppState} from './app.service';
import {TranslateService} from "ng2-translate/ng2-translate";
import {I18n} from "./i18n/i18n.service";



class MockTranslateService extends TranslateService {
    constructor() {
        super(null, null);
    }

    public instant(text:string) {
        return text;
    }
}



describe('App', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        AppState,
        {provide: TranslateService, useClass: MockTranslateService},
        I18n,
        App
    ]);
    let app:App;

    it('should be defined', inject([App], (_app) => {
        app = _app;
        expect(app).toBeDefined();
    }));

});
