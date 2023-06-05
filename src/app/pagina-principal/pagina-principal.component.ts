import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {
  productoBuscado: string = ''; // Asigna un valor inicial a la variable

  constructor(private router: Router) {}

  ngOnInit(): void {}

  buscarProducto(): void {
    if (!this.productoBuscado) {
      alert('Por favor, ingrese un producto válido.');
      return;
    }

    // Redireccionar a la página de búsqueda con el nombre del producto como parámetro
    this.router.navigate(['/pagina-busqueda', this.productoBuscado]);
  }

  verDetalleProducto(producto: string): void {
    // Redireccionar a la página de información del producto seleccionado
    this.router.navigate(['/informacion-producto', producto]);
  }
}
