import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public nome_usu:string = "Nome usuario";

    constructor() {}


  public somaDoisNumeros(): void{
    alert("passou");
  }

  ionViewDidLoad(){
    alert("passou");
    this.somaDoisNumeros();
  }


}
