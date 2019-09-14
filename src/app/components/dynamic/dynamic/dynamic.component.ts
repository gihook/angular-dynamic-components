import { Component, ViewChild, Input, Type, ComponentFactoryResolver, OnInit } from '@angular/core';
import { TemplateDirective } from '../../../template.directive';

@Component({
    selector: 'app-dynamic',
    templateUrl: './dynamic.component.html',
    styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
    @ViewChild(TemplateDirective, { static: true }) viewChild: TemplateDirective;
    @Input() type: Type<any>;
    @Input() input: Type<any>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() {
        const factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
        const viewContainerRef = this.viewChild.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(factory);
        componentRef.instance['input'] = this.input;
    }
}
