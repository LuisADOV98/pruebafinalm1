import { Movie } from "./movie"

import { Professional } from "./professional"

let fs = require("fs")

export class Imdb{
    public peliculas: Movie[]
        constructor(){
            this.peliculas = []
        }

        printPeliculas(){
            return this.peliculas
        }

        escribirEnFicheroJSON(nombreFichero:string):void{
            let dato = JSON.stringify(this);
            fs.writeFileSync(nombreFichero, dato);
        }

        obtenerInstaciaIMDB(nombreFichero:string):Imdb{

            let dato = fs.readFileSync(nombreFichero, 'utf-8')
            let imbdDato = JSON.parse(dato);
            //let imdbfinal = Object.assign(new Imdb(), imbdDato)
            return imbdDato
            }
        }
    
        