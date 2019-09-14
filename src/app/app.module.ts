import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { TemplateDirective } from './template.directive';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    TemplateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
