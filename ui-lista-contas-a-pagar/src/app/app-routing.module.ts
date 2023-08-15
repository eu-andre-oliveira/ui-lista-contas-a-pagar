import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarContaComponent as CriarContaComponent } from './componentes/contas/criar-conta/criar-conta.component';
import { ContaComponent } from './componentes/contas/conta/conta.component';
import { EditarContaComponent } from './componentes/contas/editar-conta/editar-conta.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'conta',
    pathMatch: 'full'
  },
  {
    path: 'criarConta',
    component: CriarContaComponent,
  },
  {
    path: 'conta',
    component: ContaComponent,
  },
  {
    path: 'conta/editar-conta/:id',
    component: EditarContaComponent,
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
