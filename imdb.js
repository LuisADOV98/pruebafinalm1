"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imdb = void 0;
var fs = require("fs");
var Imdb = /** @class */ (function () {
    function Imdb() {
        this.peliculas = [];
    }
    Imdb.prototype.printPeliculas = function () {
        return this.peliculas;
    };
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var dato = JSON.stringify(this);
        fs.writeFileSync(nombreFichero, dato);
    };
    Imdb.prototype.obtenerInstaciaIMDB = function (nombreFichero) {
        var dato = fs.readFileSync(nombreFichero, 'utf-8');
        var imbdDato = JSON.parse(dato);
        //let imdbfinal = Object.assign(new Imdb(), imbdDato)
        return imbdDato;
    };
    return Imdb;
}());
exports.Imdb = Imdb;
