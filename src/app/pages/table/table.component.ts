import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/components-bootstrap/modal/modal.componet';
import { ContatosResponse } from 'src/app/models/contatos-response';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  lista: any = [];
  // aparecerModal: boolean =false
  constructor(private agendaService : AgendaService, public modalService: BsModalService ) { }

  ngOnInit(): void {
    this.chamandoAgendaService();

    this.behaviors();
  }

  chamandoAgendaService(): void {
    this.agendaService.getContatos().subscribe((data: ContatosResponse) => {
    this.lista = data; 
    });
  }

  behaviors(): void{
  this.agendaService.atualizarGrid.subscribe((data) =>{
    if(data)
    this.chamandoAgendaService();
  })
  this.agendaService.guardandoDadosFiltrados.subscribe((data)=>{
    if(data !== null)
    this.lista = data;
  })
  }

  editar(obj:number):void{
    const initialState: any = {
      list:[
        obj
      ]
    }

    this.modalService.show(ModalComponent, {initialState});
  }
  excluir(id: number): void{
    this.agendaService.deleteContatos(id).subscribe((data) => {
      this.chamandoAgendaService();
    })
  }

}
