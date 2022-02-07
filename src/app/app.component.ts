import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  title = 'Angular';
  variavelNgClass!: boolean ;
  variavelNgClassDois: boolean = true;

    

  ngOnInit(): void {
    let test = 2;
  }
  

  dispararFuncao(){
    return  true;
  }
}