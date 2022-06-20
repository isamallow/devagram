import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() pergunta?: string;
  @Input() textoDaAcao?: string;
  @Input() rota?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
