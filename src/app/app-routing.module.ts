import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PreviewComponent} from './preview/preview.component';
import {Test1Component} from './test1/test1.component';
import {Test02Component} from './test2/components';
import {Test3Component} from './test3/test3.component';
import {Test4Component} from './test4/test4.component';
import {Test6Component} from './test6/test6.component';
import {Test5Component} from './test5/test5.component';

const routes: Routes = [
  {
    path: '',
    component: PreviewComponent
  },
  {
    path: 'test1',
    component: Test1Component
  },
  {
    path: 'test2',
    component: Test02Component
  },
  {
    path: 'test3',
    component: Test3Component
  },
  {
    path: 'test4',
    component: Test4Component
  },
  {
    path: 'test5',
    component: Test5Component
  },
  {
    path: 'test6',
    component: Test6Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
