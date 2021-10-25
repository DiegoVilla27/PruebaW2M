import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ActivationEnd, Router } from '@angular/router'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  
  constructor(
    private titleRoute: Title,
    private router: Router
  ) {
    this.getDataRoute().subscribe((res: any) => {
      this.titleRoute.setTitle('W2M | ' + res.title)
    })
  }

  // Get data sent by routing.
  getDataRoute() {
    return this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    )
  }
}
