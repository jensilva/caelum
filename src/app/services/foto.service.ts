
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { FotoComponent } from '../foto/foto.component';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core/src/metadata/directives';



@Injectable()
export class FotoService {
  private URL = "http://localhost:3000/v1/fotos/";

  private opcoesHttp = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private conexaoApi: HttpClient) {}

  listar() {
    return this.conexaoApi.get<FotoComponent[]>(this.URL);
  }

  cadastrar(foto: FotoComponent): Observable<Mensagens> {
    return this.conexaoApi.post(
      this.URL,
      JSON.stringify(foto),
      this.opcoesHttp
    )

    .map (
      () => new Mensagens (`Foto ${foto.titulo} cadastrada com sucesso`)

    )
  }

  deletar(foto: FotoComponent) {
    return this.conexaoApi.delete(this.URL + foto._id);
  }

  consultar(fotoId: string) {
    return this.conexaoApi.get<FotoComponent>(this.URL + fotoId);
  }

  atualizar(foto: FotoComponent): Observable<Mensagens> {
    return this.conexaoApi.put(
      this.URL + foto._id,
      JSON.stringify(foto),
      this.opcoesHttp
    )

    .map (
      () => new Mensagens (`Foto ${foto.titulo} alterada com sucesso`)

    )
  }
}

class Mensagens {

  constructor (private _texto: string) {}

  get texto(){
    return this._texto
  }

    
  }