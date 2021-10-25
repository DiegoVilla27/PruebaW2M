import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

// REDUCER
import { appReducers } from './reducers/app.reducer'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
