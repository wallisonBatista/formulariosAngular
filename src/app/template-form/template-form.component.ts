import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'alert alert-danger': this.verificaValidTouched(campo),
    };
  }

  consultaCEP(cep) {
    cep = cep.replace(/\D/g, '');

    if (cep != '') {
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.http
          .get(`https://viacep.com.br/ws/${cep}/json`)
          .pipe(map((dados) => dados))
          .subscribe((dados) => console.log(dados));
      }
    }
  }
}
