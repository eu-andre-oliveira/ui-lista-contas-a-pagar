import { Component, OnInit } from '@angular/core';
import { Conta } from '../../conta.model';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {
  contas: Conta[] = [
    { id: 1, codigoBarras:'', paga: false, dataVencimento: '2023-07-15', valor: 150.00, nomeConta: 'Aluguel' },
    { id: 2, codigoBarras:'', paga: true,dataVencimento: '2023-07-20', valor: 50.00, nomeConta: 'Internet' },
    { id: 3, codigoBarras:'', paga: false,dataVencimento: '2023-07-25', valor: 30.00, nomeConta: 'Energia Elétrica' },
    // Adicione mais contas aqui
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
