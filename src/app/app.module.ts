import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { TemplateDirective } from './template.directive';
import { SplitContainerComponent } from './components/split-container/split-container/split-container.component';
import { DynamicComponent } from './components/dynamic/dynamic/dynamic.component';
import { LayoutState } from './store/layout.state';
import { SecondComponent } from './components/second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    TemplateDirective,
    SplitContainerComponent,
    DynamicComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
        LayoutState
    ])
  ],
  entryComponents: [
    DialogComponent,
    SecondComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
