import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public options = {
    strings: ["Writer", "Actor", "Web Developer"],
    typeSpeed: 200,
    loop: true
  };

  public typed: Typed;

  // Social Network Links
  public socialNetworkLinks = {
    linkedIn: "https://linkedin.com/in/nishant-kumar-793638108",
    twitter: "https://twitter.com/Nishant0891?t=KP4fLrnsOPtkg9gFZ3V2aA&s=08",
    facebook: "https://www.facebook.com/profile.php?id=100004960841802",
    instagram: "https://www.instagram.com/nishkr0392/"
  };

  ngOnInit() {
    this.typed = new Typed('.typed-skills', this.options);
  }

}
