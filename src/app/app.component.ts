import { Component } from '@angular/core'
import { HomeComponent } from './home/home.component'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterOutlet],
  template: `
    <main>
      <header class='brand-name'>
        <div class='container'>
          <img class='brand-logo' src='../assets/angular-svgrepo-com.svg' alt='logo' aria-hidden='true' />
          <h1 class='title'>{{ title }}</h1>
        </div>
      </header>
      <section class='content'>
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Titorial'
}
