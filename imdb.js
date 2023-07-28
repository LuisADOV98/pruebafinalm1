"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imdb = void 0;
var movie_1 = require("./movie");
var fs = require("fs");
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.printPeliculas = function () {
        return this.peliculas;
    };
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var dato = JSON.stringify(this, null, 2);
        fs.writeFileSync(nombreFichero, dato);
    };
    Imdb.prototype.obtenerInstaciaIMDB = function (nombreFichero) {
        var dato = fs.readFileSync(nombreFichero, 'utf-8');
        var imbdDato = JSON.parse(dato);
        var peliculas1 = imbdDato.peliculas.map(function (moviedata) { return new movie_1.Movie(moviedata.title, moviedata.releaseYear, moviedata.nacionality, moviedata.genre); });
        return new Imdb(this.peliculas);
    };
    return Imdb;
}());
exports.Imdb = Imdb;
