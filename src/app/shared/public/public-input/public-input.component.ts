import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-public-input',
  templateUrl: './public-input.component.html',
  styleUrls: ['./public-input.component.scss']
})
export class PublicInputComponent implements OnInit {

  @Input() public referenciaFormulario?: AbstractControl;
  @Input() public imagem?: string;
  @Input() public tipo?: string;
  @Input() public placeholder?: string;

  constructor() { }

  ngOnInit(): void {
  }

  public aoModificarCampo(event: any): void {
    this.referenciaFormulario?.setValue(event);
    this.referenciaFormulario?.markAsDirty();
  }

  public obterMensagemErro(): string {
    if(!this.referenciaFormulario?.errors) {
      return '';
    }

    if(this.referenciaFormulario?.errors['required']) {
      return "Campo obrigatório"
    }

    return "Problemas no preenchimento"
  }
}
