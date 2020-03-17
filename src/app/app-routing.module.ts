import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrollComponentComponent } from '././broll-component/broll-component.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'broll',
    component: BrollComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
