import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.scss']
})
export class PublicPageComponent implements OnInit {

  @Input() classeCssLogo: string = '';
  @Input() classeCssCustomizado: string = '';
  @Input() textoBotaoSubmit?: string;
  @Output() submeterFormulario: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public aoSubmeter() {
    this.submeterFormulario.emit();
  }

}
