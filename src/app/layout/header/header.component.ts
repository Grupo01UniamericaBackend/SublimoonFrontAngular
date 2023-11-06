import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  
  constructor(private router: Router){
    
  }
  categorias(categoria: string){
    this.router.navigate(['cliente/produto/', categoria]);
}
}
