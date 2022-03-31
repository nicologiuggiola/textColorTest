import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {

  text: string = '';
  color: string = '';
  data: any = {};
  testo?: HTMLParagraphElement

  constructor(private serv: HelperService) { }

  ngOnInit(): void {
    this.data = this.serv.printText();
    this.text = this.data.text;
    this.color = this.data.color;
    const testo = document.getElementById('testo');
    
    // if (testo) {
    //   testo.style.color = this.color;
    // }
    
  }



}
