import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EthComponent } from './eth/eth.component';

const routes: Routes = [
  {path: 'eth', component: EthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
