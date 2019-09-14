import { Component, ViewChild, ComponentFactoryResolver, OnInit } from '@angular/core';
import { TemplateDirective } from './template.directive';
import { Store } from '@ngxs/store';
import { LayoutStateModel } from './store/layout.state';
import { UpdateComponentsConfig } from './store/layout.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild(TemplateDirective, { static: true }) template: TemplateDirective;

    componentsConfig;

    constructor(private store: Store, private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() {
        this.store.select<LayoutStateModel>(store => store.layout).subscribe(componentsConfig => {
            console.log({ componentsConfig });
            this.componentsConfig = componentsConfig.pageComponentsConfig;
        });

        setTimeout(() => {
            console.log('updating config...');
            this.store.dispatch(new UpdateComponentsConfig());
        }, 3000);
    }
}
