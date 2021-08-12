import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  consultaCEP(cep: string) {

    //verifica se o cep tem somente digitos
    cep => {cep.replace(/\D/g, '');} 

    //verifica se o campo cep não está vázio e valida o cep pela RE
    if (cep != '') {
      var validacep = /^[0-9]{8}$/;

      //valida o formato do cep
      if (validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`)
      }
    }

    return of({})
  }
}
