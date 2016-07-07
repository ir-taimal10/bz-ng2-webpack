import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {I18n} from '../i18n/i18n.service';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
import {Bounce} from '../commons/components/bounce/bounce.component';
const COMPONENT_STYLES = require('./amusement.less');
@Component({
    selector: 'amusement',
    pipes: [TranslatePipe],
    styles: [COMPONENT_STYLES.toString()],
    template: require('./amusement.html'),
    directives: [Bounce]
})
export class Amusement {
    paramsSub:any;
    amusementTitleParam:string;

    constructor(private activatedRoute:ActivatedRoute,
                private i18n:I18n) {
    }

    ngOnInit() {
        this.paramsSub = this.activatedRoute.params.subscribe(params => {
            this.amusementTitleParam = params['amusementTitleParam'] || this.i18n.instant('general_amusement_default_title');
            console.log(this.amusementTitleParam);
        });
    }

    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }
}