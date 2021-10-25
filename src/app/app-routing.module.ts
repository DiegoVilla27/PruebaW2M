import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./pages/heroes/heroes.module').then(m => m.HeroesModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
