import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Test1Component } from './test1/test1.component';
import {FormsModule} from '@angular/forms';
import {ChildComponent, Test02Component, TextField} from './test2/components';
import { Playground1Component } from './playground1/playground1.component';
import { Playground2Component } from './playground2/playground2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';
import { Test6Component } from './test6/test6.component';
import {NgxLinkifyjsModule} from 'ngx-linkifyjs';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test02Component,
    ChildComponent,
    TextField,
    Playground1Component,
    Playground2Component,
    Test3Component,
    Test4Component,
    Test6Component
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
