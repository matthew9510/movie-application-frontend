import { Component } from '@angular/core';
import { AppInfoService } from './app-info.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-app';
  constructor(public _appInfoService: AppInfoService){}
}
