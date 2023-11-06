import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { OcDirectivaComponent } from './oc-directiva/oc-directiva.component';
import { MaestrosComponent } from './maestros/maestros.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'maestros',
        component: MaestrosComponent
      },
      {
        path: 'oc',
        component: OcDirectivaComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
