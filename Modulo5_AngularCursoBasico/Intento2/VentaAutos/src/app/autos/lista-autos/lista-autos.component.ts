import { Component, OnInit } from "@angular/core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Auto } from "src/app/datos/auto";

@Component({
    selector: "lista-autos",
    templateUrl: "./lista-autos.component.html",
    styleUrls: ['./lista-autos.component.css']
})

export class ListaAutosComponent implements OnInit {
    faStar = faStar;

    starList = [];
    tituloListaAutos: string = "Lista de Automóviles";
    listaAutos: Auto[] = [];
    listaAutosFiltrados: Auto[] = [];
    imageWidth = 200;
    imageMargin = 2;
    muestraImagen: boolean = false;

    private _filtro: string = "";

    get filtro(): string {
        return this._filtro;
    }

    set filtro( filtro: string ) {
        this._filtro = filtro;
        this.filtraAutos( filtro );
    }

    filtraAutos( filtrarPor: string ): void {
        filtrarPor = filtrarPor.toLocaleLowerCase();
        this.listaAutosFiltrados = this.listaAutos.filter(
            ( auto: Auto ) => auto.marca.toLocaleLowerCase().includes( filtrarPor )
        )
    }

    ngOnInit(): void {
        this.listaAutos = [
            {
                id: 1,
                imageUrl: "../../assets/KiaCerato.jpeg",
                marca: "Kia",
                modelo: "Cerato Vivro",
                anio: 2022,
                color: "Gris Oscuro",
                kilometros: 9500,
                calificacion: 3,
                precio: 90000000,
            },
            {
                id: 2,
                imageUrl: "../../assets/Mazda3.jpg",
                marca: "Mazda",
                modelo: "3 Touring",
                anio: 2021,
                color: "Gris Plata",
                kilometros: 6500,
                calificacion: 4.8,
                precio:96000000,
            },
            {
                id: 3,
                imageUrl: "../../assets/NissanSentra.jpg",
                marca: "Nissan",
                modelo: "Sentra SR",
                anio: 2022,
                color: "Naranja Bi-tono",
                kilometros: 12000,
                calificacion: 4,
                precio: 110000000,
            },
            {
                id: 4,
                imageUrl: "../../assets/ToyotaCorolla.jpg",
                marca: "Toyota",
                modelo: "Corolla Seg",
                anio: 2020,
                color: "Azul Oscuro",
                kilometros: 21500,
                calificacion: 5,
                precio: 105000000,
            },
            {
                id: 5,
                imageUrl: "../../assets/VolkswagenJetta.jpg",
                marca: "Volkswagen",
                modelo: "Jetta Highline",
                anio: 2022,
                color: "Rojo",
                kilometros: 4000,
                calificacion: 3,
                precio: 108000000,
            }
        ];
        this.listaAutosFiltrados = this.listaAutos;
    }

    muestraImagenes(): void {
        this.muestraImagen = !this.muestraImagen;
    }

    onClickCalificacion ( mensaje: string ): void {
        alert( "Dieron click en la calificacion: " + mensaje ); 
    }
}
