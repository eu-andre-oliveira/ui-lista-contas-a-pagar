import { Component, OnInit } from '@angular/core';
import { Conta } from '../../conta.model';
import { ContasService } from '../../contas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-conta',
  templateUrl: './editar-conta.component.html',
  styleUrls: ['./editar-conta.component.css'],
})
export class EditarContaComponent implements OnInit {
  conta: Conta = {
    dataVencimento: '',
    valor: 0,
    nomeConta: '',
    paga: false,
    codigoBarras: '',
  };
  constructor(
    private service: ContasService,
    private router: Router,
    private route: ActivatedRoute)
    {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.service.buscarPorId(parseInt(id!)).subscribe((conta)=> {
      this.conta = conta

    })
  }

  editarConta() {
    this.service.editarConta(this.conta).subscribe();
    this.router.navigate(['/conta']);
  }

  cancelar() {
    this.router.navigate(['/conta']);
  }
}
