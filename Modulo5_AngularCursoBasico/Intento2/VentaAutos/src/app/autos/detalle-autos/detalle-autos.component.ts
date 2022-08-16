import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-autos',
  templateUrl: './detalle-autos.component.html',
  styleUrls: ['./detalle-autos.component.css']
})
export class DetalleAutosComponent implements OnInit {

  tituloPagina = "Detalle de autos";

  constructor() { }

  ngOnInit(): void {
  }

}
