import { Component } from '@angular/core'
import { HomeComponent } from './home/home.component'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class='brand-name'>
          <div class='container'>
            <img class='brand-logo' src='../assets/angular-svgrepo-com.svg' alt='logo' aria-hidden='true' />
            <h1 class='title'>{{ title }}</h1>
          </div>
        </header>
      </a>
      <section class='content'>
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Titorial'
}
