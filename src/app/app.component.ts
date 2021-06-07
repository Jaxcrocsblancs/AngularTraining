import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-app';
  current = "recipe";

  currentPage() {
    return this.current;
  }

  onNavigate(feature: string) {
    this.current = feature;
  }
}
