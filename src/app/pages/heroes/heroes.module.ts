import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeroesRoutingModule } from './heroes-routing.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { HeroeNewComponent } from './heroe-new/heroe-new.component'
import { HeroeEditComponent } from './heroe-edit/heroe-edit.component'
import { HeroeListComponent } from './heroe-list/heroe-list.component'

@NgModule({
  declarations: [
    HeroeNewComponent,
    HeroeEditComponent,
    HeroeListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
