import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    nome: null,
    email: null,
  };

  onSubmit(form) {}

  constructor() {}

  ngOnInit(): void {}

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'alert alert-danger': this.verificaValidTouched(campo),
    };
  }
}
