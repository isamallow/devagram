import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devagram';

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      imagem: [null],
      nome: ['', Validators.required]
    })
  }

  public obterReferencia(nomeCampo: string): AbstractControl {
    return this.form.controls[nomeCampo];
  }
}
