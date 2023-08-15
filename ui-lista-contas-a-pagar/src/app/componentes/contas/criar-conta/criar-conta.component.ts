import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContasService } from '../../contas.service';
import { Conta } from '../../conta.model';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css'],
})
export class CriarContaComponent implements OnInit {

  conta: Conta = {
    dataVencimento: '',
    valor: 0,
    nomeConta: '',
    paga: false,
    codigoBarras: ''
  };
  constructor(private service: ContasService, private router: Router) {}

  ngOnInit(): void {}
  criarConta() {
    this.service.criarConta(this.conta).subscribe()
    this.router.navigate(['/conta']);
  }

  cancelar() {
    this.router.navigate(['/conta']);
  }
}
