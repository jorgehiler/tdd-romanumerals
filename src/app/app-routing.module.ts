import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RomanComponent } from './roman/roman.component';

const routes: Routes = [{ path: '', redirectTo: '/Roman', pathMatch: 'full' },
{
  path: 'Roman',
  component: RomanComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
