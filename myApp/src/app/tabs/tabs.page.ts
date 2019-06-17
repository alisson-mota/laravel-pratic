import { Component } from '@angular/core';
import { LoginPage } from '../login/login.page';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tab4 = LoginPage

  constructor() {}

}
