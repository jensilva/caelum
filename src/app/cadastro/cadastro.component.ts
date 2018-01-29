import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FotoService } from '../services/foto.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})

export class CadastroComponent implements OnInit {

  foto = new FotoComponent()
  mensagem = ''

  constructor(private servico: FotoService,
              private rota: ActivatedRoute,
              private roteador: Router     ) {
        
          rota.params.subscribe(
                parametros => {
                  if(parametros.fotoId)
                  this.carregarFoto(parametros.fotoId)
                }
          )

          
          }
  

  ngOnInit() {
  }

  carregarFoto(idFoto){

    this.servico.consultar(idFoto).subscribe(
        fotoApi => this.foto = fotoApi
        , erro => console.log('erro carregamento fotoAPI')
        
    )

  }
  
  salvar(){
    
    if (this.foto._id){

      this.servico.atualizar(this.foto)
      .subscribe (
        mensagemServico => {
        //this.roteador.navigate([''])
        this.mensagem = mensagemServico.texto}
        ,erro => console.log("erro serviço atualizar")
        
      )

    } else {

      this.servico.cadastrar(this.foto)
  
        .subscribe (
          mensagemServico => {
            
            this.foto = new FotoComponent();
            this.mensagem = mensagemServico.texto
            
          }
          , erro => console.log("tuts tuts tuts quero ver") 
        )

    }
    
    
  }
}
