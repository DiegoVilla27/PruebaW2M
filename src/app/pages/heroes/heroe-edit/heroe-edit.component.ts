import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store'
import { addAnimation, removeAnimation } from 'src/app/helpers/animation.helper'
import { Heroe } from 'src/app/models/heroe.model'
import { editHeroeAction } from 'src/app/reducers/heroe/heroe.actions'
import { UiService } from 'src/app/services/services.index'
import { AppState } from '../../../reducers/app.reducer'

declare var $: any

@Component({
  selector: 'app-heroe-edit',
  templateUrl: './heroe-edit.component.html',
  styleUrls: ['./heroe-edit.component.scss']
})
export class HeroeEditComponent implements OnInit {

  // ICONS
  faExclamationTriangle = faExclamationTriangle

  // VIEWCHILDS
  @ViewChild('btnSave', { read: ElementRef }) btnSave: ElementRef

  // ANIMATIONS
  private animationIn = 'rubberBand'
  private animationOut = 'bounceOut'
  private velocityIn = 'fast'
  private velocityOut = 'fast'

  // HEROE
  heroe: Heroe = null

  // FORM
  form: FormGroup

  // VALIDATIONS
  validation_messages = {
    'name': [
      { type: 'required', message: 'Enter your name.' },
    ],
    'power': [
      { type: 'required', message: 'Enter your power.' },
    ]
  }

  constructor(
    private _uiService: UiService,
    public _renderer: Renderer2,
    private _store: Store<AppState>
  ) {
    this.loadData()
    this.subscribeSelectedHeroeStore()
  }

  ngOnInit(): void {
  }

  // This method allows me to subscribe to the redux store 
  subscribeSelectedHeroeStore() {    
    this._store.select('heroeSelected').subscribe(heroeSelected => {
      if (heroeSelected)
      this._store.select('heroes').subscribe(heroes => {
        this.heroe = heroes.find(heroe => heroe.id === heroeSelected.id)
        this.form.patchValue({
          name: this.heroe?.name || null,
          power: this.heroe?.power || null
        })
      })
    })
  }

  // This method allows save heroe
  save(heroe: Heroe): void {
    this._store.dispatch(editHeroeAction({id: this.heroe.id, name: heroe.name, power: heroe.power}))
    this._uiService.toastShow(`Heroe edit succesfully!`, 'success')
    $('#editHeroeModal').modal('hide')
    this.clearData()
  }

  // This method allows animating the save button
  animationEditHeroe(): void {
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
