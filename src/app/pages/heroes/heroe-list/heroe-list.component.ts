import { Component, OnInit } from '@angular/core';
import { faPaperPlane, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store'
import { Heroe } from 'src/app/models/heroe.model'
import { AppState } from 'src/app/reducers/app.reducer'
import { deleteHeroeAction } from 'src/app/reducers/heroe/heroe.actions'
import { selectedHeroeAction } from 'src/app/reducers/heroeSelected/heroeSelected.actions'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-heroe-list',
  templateUrl: './heroe-list.component.html',
  styleUrls: ['./heroe-list.component.scss']
})
export class HeroeListComponent implements OnInit {

  // ICONS
  faPencilAlt = faPencilAlt
  faTrash = faTrash
  faPaperPlane = faPaperPlane

  // HEROES
  list: Heroe[] = []
  listFilter: Heroe[] = []

  constructor(
    private _store: Store<AppState>
  ) {
    this.subscribeHeroesStore()
  }

  ngOnInit(): void {
  }

  search(event: any): void {
    let text: string = event.target.value
    this.subscribeHeroesStore()
    this.list = this.list.filter((heroe: Heroe) => {
      if (heroe.id.includes(text.toLocaleLowerCase()) || (heroe.name).toLocaleLowerCase().includes(text.toLocaleLowerCase()) || (heroe.power).toLocaleLowerCase().includes(text.toLocaleLowerCase()))
        return heroe
      else
        return null
    })
  }

  // This method allows me to subscribe to the redux store 
  subscribeHeroesStore() {
    this._store.select('heroes').subscribe(state => this.list = state)
  }

  // This method allows me select a heroe 
  setIdEditHeroe(heroe: Heroe) {
    this._store.dispatch(selectedHeroeAction({heroe}))
  }

  // This method allows me delete a heroe
  deleteHeroe(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._store.dispatch(deleteHeroeAction({id}))
        Swal.fire(
          'Deleted!',
          'Heroe has been deleted.',
          'success'
        )
      }
    })
  }
}
