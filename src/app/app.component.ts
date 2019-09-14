import { Component, ViewChild, ComponentFactoryResolver, OnInit } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { TemplateDirective } from './template.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(TemplateDirective, { static: true }) template: TemplateDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    const viewContainerRef = this.template.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
