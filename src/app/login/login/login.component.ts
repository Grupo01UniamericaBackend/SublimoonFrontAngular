import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Adm } from 'src/app/models/adm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  roteador = inject(Router);

  adm: Adm = new Adm;

  logar(){
    if(this.adm.userAdm == "AdmUserPred123" && this.adm.senhaAdm == "123senhaAdm321"){
      this.roteador.navigate(['/admin'])
    }
    else
    alert("Nome ou senha de ADM incorreto!!");
  }

}
