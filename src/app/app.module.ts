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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
