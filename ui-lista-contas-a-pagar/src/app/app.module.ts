import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { ContaComponent } from './componentes/contas/conta/conta.component';
import { CriarContaComponent as CriarContaComponent } from './componentes/contas/criar-conta/criar-conta.component';
import { FormsModule } from '@angular/forms';
import { EditarContaComponent } from './componentes/contas/editar-conta/editar-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    ContaComponent,
    CriarContaComponent,
    EditarContaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
