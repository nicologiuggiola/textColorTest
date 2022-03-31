import { Component } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {

  text: string = '';

  constructor(private serv: HelperService) { }

  onClickSave() {
    this.serv.saveText(this.text);
  }

}
