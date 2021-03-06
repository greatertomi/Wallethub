import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Test1Component } from './test1/test1.component';
import {FormsModule} from '@angular/forms';
import {ChildComponent, Test02Component, TextField} from './test2/components';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';
import { Test6Component } from './test6/test6.component';
import {NgxLinkifyjsModule} from 'ngx-linkifyjs';
import { PreviewComponent } from './preview/preview.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Test5Component } from './test5/test5.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test02Component,
    ChildComponent,
    TextField,
    Test3Component,
    Test4Component,
    Test6Component,
    PreviewComponent,
    FooterComponent,
    HeaderComponent,
    Test5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    FormsModule,
    NgxLinkifyjsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
