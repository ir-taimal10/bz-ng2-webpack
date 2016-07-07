// App
import {Amusement} from "./amusement/amusement.component";
export * from './app.component';
export * from './app.service';
import {I18n} from './i18n/i18n.service';
import {TRANSLATE_PROVIDERS} from 'ng2-translate/ng2-translate';
import {AppState} from './app.service';
import {Home} from "./home/home.component";


// Application wide providers
export const APP_PROVIDERS = [
    TRANSLATE_PROVIDERS,
    I18n,
    Amusement,
    Home,
    AppState
];
