import { Injectable } from "@angular/core";
import { Auto } from "../datos/auto";

@Injectable({
    providedIn: "root"
})

export class AutosService{    
    listaAutos: Auto[] = [];

    public obtenListaAutos(): Auto[] {
        if( this.listaAutos.length == 0 ) {
            this.listaAutos = this._determinaListaAutos();
        }
        return this.listaAutos;
    }

    public obtenAuto( id: number ): Auto {
        if( this.listaAutos.length == 0 ) {
          this.listaAutos = this._determinaListaAutos();
        }        
        return this.listaAutos.find( auto => auto.id == id )!;
      }

    private _determinaListaAutos(): Auto[] {
        let listaAutos = [
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
        ]
        return listaAutos;
    }
}