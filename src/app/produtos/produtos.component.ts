import { Component, OnInit } from '@angular/core';
import { ProdutService } from '../produt.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{

  produtos: Produto[] = [];

  constructor(private produtService: ProdutService) {}

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos(){
    this.produtService.getProdutos().subscribe(
      {
        next: data => this.produtos = data,
        error: msg => console.log("Erro ao chamar o endpont" + msg)
      }
    )
  }

}
