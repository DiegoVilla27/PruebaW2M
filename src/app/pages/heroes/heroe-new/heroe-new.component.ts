import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store'
import { addAnimation, removeAnimation } from 'src/app/helpers/animation.helper'
import { Heroe } from 'src/app/models/heroe.model'
import { createHeroeAction } from 'src/app/reducers/heroe/heroe.actions'
import { UiService } from 'src/app/services/services.index'
import { AppState } from '../../../reducers/app.reducer'

declare var $: any

@Component({
  selector: 'app-heroe-new',
  templateUrl: './heroe-new.component.html',
  styleUrls: ['./heroe-new.component.scss']
})
export class HeroeNewComponent implements OnInit {

  // ICONS
  faExclamationTriangle = faExclamationTriangle

  // VIEWCHILDS
  @ViewChild('btnSave', { read: ElementRef }) btnSave: ElementRef

  // ANIMATIONS
  private animationIn = 'rubberBand'
  private animationOut = 'bounceOut'
  private velocityIn = 'fast'
  private velocityOut = 'fast'

  // FORM
  form: FormGroup

  // VALIDATIONS
  validation_messages = {
    'name': [
      { type: 'required', message: 'Enter your email.' },
      { type: 'email', message: 'This is not a valid email.' }
    ],
    'power': [
      { type: 'required', message: 'Enter your password.' },
      { type: 'pattern', message: 'This is not a valid password. Contains illegal characters.' }
    ]
  }

  constructor(
    private _uiService: UiService,
    public _renderer: Renderer2,
    private _store: Store<AppState>
  ) {
    this.loadData()
  }

  ngOnInit(): void {
  }

  // This method allows the user to login
  save(heroe: Heroe): void {
    this._store.dispatch(createHeroeAction({name: heroe.name, power: heroe.power}))
    this._uiService.toastShow(`Heroe save succesfully!`, 'success')
    $('#newHeroeModal').modal('hide');
    this.clearData()
  }

  // This method allows animating the login button
  animationNewHeroe(): void {
    if (this.form.invalid) {
      this._uiService.showAlert('Enter all data.', 'warning', '')
      return
    } else {
      let el = this.btnSave.nativeElement
      addAnimation(this._renderer, el, this.animationIn, this.velocityIn)
      removeAnimation(this._renderer, el, this.animationIn, this.velocityIn).then(() => {
        addAnimation(this._renderer, el, this.animationOut, this.velocityOut)
        removeAnimation(this._renderer, el, this.animationOut, this.velocityOut).then(() => this.save(this.form.value) )
      })
    }
  }

  // This method is responsible for loading the form data
  loadData(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      power: new FormControl(null, [
        Validators.required
      ])
    })
    this.clearData()
  }

  // Clear form data 
  clearData(): void {
    this.form.reset()
    this.form.setValue({
      name: '',
      power: ''
    })
  }

}
