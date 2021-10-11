import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public options = {
    strings: ["Writer", "Developer"],
    typeSpeed: 200,
    loop: true
  };

  public typed: Typed;

  ngOnInit() {
    this.typed = new Typed('.typed-skills', this.options);
  }

}
