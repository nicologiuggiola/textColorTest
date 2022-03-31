import { Component } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent {

  color: string = '';

  constructor(private serv: HelperService) { }

  selectColor(color: string) {
    this.serv.saveColor(color);
  }

}
