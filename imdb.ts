import { Movie } from "./movie"

import { Professional } from "./professional"

let fs = require("fs")

export class Imdb{
    public peliculas: Movie[]
        constructor(peliculas: Movie[]){
            this.peliculas = peliculas
        }
        printPeliculas(){
            return this.peliculas
        }
        escribirEnFicheroJSON(nombreFichero:string):void{
            let dato = JSON.stringify(this, null, 2);
            fs.writeFileSync(nombreFichero, dato);
        }
        obtenerInstaciaIMDB(nombreFichero:string):Imdb{

            let dato = fs.readFileSync(nombreFichero, 'utf-8')
            let imbdDato = JSON.parse(dato);
            let peliculas1:Movie = imbdDato.peliculas.map(
                (moviedata:any) => new Movie(moviedata.title, moviedata.releaseYear, moviedata.nacionality, moviedata.genre)
            );
            return new Imdb(this.peliculas)
            }
        }
    