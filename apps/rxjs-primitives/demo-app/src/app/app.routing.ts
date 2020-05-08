import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberDemoComponent } from './components/number/number-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NumberDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
