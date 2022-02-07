import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Lista } from 'src/app/models/lista';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.componet.html',
  styleUrls: ['./modal.componet.scss']
})
export class ModalComponent implements OnInit{

  formFiltros: FormGroup= new FormGroup({});

  list:Lista[] = [];


  constructor(public agendaService: AgendaService, public bsModalRef: BsModalRef, private fb: FormBuilder){

  }

  ngOnInit(){
    this.criandoForms();
    this.popularForms();

  }
  criandoForms(): void {

    this.formFiltros = this.fb.group({

      nome: ['', Validators.required],

      idade: ['', Validators.required],

      sexo: ['', Validators.required],

      telefone: ['', Validators.required],

    });

}
popularForms(): void {

    this.formFiltros.controls['nome'].setValue(this.list[0].nome);

    this.formFiltros.controls['idade'].setValue(this.list[0].idade);

    this.formFiltros.controls['sexo'].setValue(this.list[0].sexo);

    this.formFiltros.controls['telefone'].setValue(this.list[0].telefone);

}
editarInformacoes(): void { 
  let obj = {
    nome: this.formFiltros.controls['nome'].value,
    idade: this.formFiltros.controls['idade'].value,
    sexo: this.formFiltros.controls['sexo'].value,
    telefone: this.formFiltros.controls['telefone'].value
  }
  this.agendaService.editarContatos(this.list[0].id, obj).subscribe(data =>{
    this.agendaService.atualizarGrid.next(true);
    this.bsModalRef.hide();
  })
}
}
