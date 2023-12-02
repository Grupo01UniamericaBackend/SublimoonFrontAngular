import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './login/login/login.component';
import { CadloginComponent } from './login/cadlogin/cadlogin.component';
import { ProdutoDetailsComponent } from './produto/produto-details/produto-details.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { ProdutoDetalhadoComponent } from './produto/produto-detalhado/produto-detalhado.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ContatoComponent } from './contato/contato.component';
import { ProdutoCategoriaComponent } from './produto/produto-categoria/produto-categoria.component';
import { FavoritosComponent } from './produto/favoritos/favoritos.component';
import { CarrinholistComponent } from './carrinho/carrinholist/carrinholist.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch: 'full'},
  {path:"login", component: LoginComponent},
  {path:"cadLogin", component: CadloginComponent},
  {path: "admin", component: IndexComponent, children:[
    {path: "Cadproduto", component: ProdutoDetailsComponent},
    {path: "produto", component: ProdutoListComponent},
    { path: "detalhes/:id", component: ProdutoDetalhadoComponent }

  ]},
  {path: "cliente", component: IndexComponent, children:[
    {path: "produto", component: ProdutoListComponent}, 
    {path: "detalhes/:id", component: ProdutoDetalhadoComponent},
    {path: "dadosCliente", component: ClienteComponent},
    {path:"contato", component: ContatoComponent},
    {path:"produto/:categoria",component: ProdutoCategoriaComponent},
    {path: "produto/favoritos", component: FavoritosComponent},
    {path: "carrinho", component: CarrinholistComponent}


  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
