import { Component, OnInit } from '@angular/core';
import { Conta } from '../../conta.model';
import { ContasService } from '../../contas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css'],
})
export class ContaComponent implements OnInit {
  contas: Conta[] = [];
  constructor(private service: ContasService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar().subscribe((contas) => {
      this.contas = contas;
    });
  }
}
