import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({

  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']

})
export class FiltroComponent implements OnInit {

  nome!: string;
  idade!: any;
  sexo!: string;
  telefone!: string;
  
  booleana: boolean = false;
  formFiltros : FormGroup = new FormGroup({});

  populandoArray: string= '';

  arrayGenero = ['Maculino', 'Feminino', 'Outra']; 

 listaArray= [
   {
    populandoArray:''
   },
 ]

  mandandoDadosHome: any;

  constructor(
     private fb : FormBuilder,
     private agendaService: AgendaService
     ) { }

  ngOnInit(): void {
    this.criandoForms();
    this.forDeNumeros();
  }

  criandoForms(): void{
    this.formFiltros = this.fb.group({
      nome: ['', Validators.required],
      idade: ['', Validators.required],
      sexo: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }
  popularArray(){
    let obj ={
      nome: this.formFiltros.controls['nome'].value,
      idade: this.formFiltros.controls['idade'].value,
      sexo: this.formFiltros.controls['sexo'].value,
      telefone: this.formFiltros.controls['telefone'].value,
    }; 
      this.agendaService.postContatos(obj).subscribe((data) => {
        this.agendaService.atualizarGrid.next(true);
        this.limparArray();
        console.log("Inserido com susseso !")
      });
}
filtrar(){
  this.agendaService
  .getContatosFilter(this.formFiltros.controls['nome'].value,
                      this.formFiltros.controls['idade'].value,
                      this.formFiltros.controls['sexo'].value,
                      this.formFiltros.controls['telefone'].value)
  .subscribe((data)=>{
    this.agendaService.guardandoDadosFiltrados.next(data);
  })
}
populandoArrayTest(){
  let obj ={
    populandoArray: this.populandoArray
  };
  this.listaArray.push(obj);
  this.limpandoArray();
}
limpandoArray(){
  this.populandoArray = '';
}
limpandoArrayTest(){
  this.listaArray.length = 0;
}
limparArray(){
  this.formFiltros.reset();
  this.formFiltros.controls['sexo'].setValue('');
}
enviandoDadosProPai(){
  this.mandandoDadosHome.emit(true);
}

forDeNumeros(){
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
}
}
