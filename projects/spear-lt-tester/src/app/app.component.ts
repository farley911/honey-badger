import { Component } from '@angular/core';
import { Layout } from 'projects/header/src/consts/layout.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Layout: typeof Layout = Layout;
}
