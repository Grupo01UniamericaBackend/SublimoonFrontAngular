import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { IndexComponent } from './layout/index/index.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login/login.component';
import { CadloginComponent } from './login/cadlogin/cadlogin.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { ProdutoDetailsComponent } from './produto/produto-details/produto-details.component';
import { ProdutoDetalhadoComponent } from './produto/produto-detalhado/produto-detalhado.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ContatoComponent } from './contato/contato.component';
import { ProdutoCategoriaComponent } from './produto/produto-categoria/produto-categoria.component';
import { FavoritosComponent } from './produto/favoritos/favoritos.component';
import { CarrinholistComponent } from './carrinho/carrinholist/carrinholist.component';
import { httpInterceptorProviders } from './interceptors/httpinterceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent,
    CadloginComponent,
    ProdutoListComponent,
    ProdutoDetailsComponent,
    ProdutoDetalhadoComponent,
    ClienteComponent,
    ContatoComponent,
    ProdutoCategoriaComponent,
    FavoritosComponent,
    CarrinholistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
