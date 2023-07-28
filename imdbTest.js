"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imdb_1 = require("./imdb");
var movie_1 = require("./movie");
var professional_1 = require("./professional");
var fs = require("fs");
var readlineSync = require('readline-sync');
var pro1 = new professional_1.Professional("luis", 25, 100, 181, false, "portugues", 0, "actor");
var pro2 = new professional_1.Professional("jose", 28, 80, 188, false, "argentino", 1, "actor");
var pro3 = new professional_1.Professional("omar", 19, 90, 186, false, "dominicano", 0, "writer");
var pro4 = new professional_1.Professional("jesus", 23, 75, 173, false, "peruano", 0, "director");
var pelicula = new movie_1.Movie("mujer bonita", 2000, "estados unidos", "romance");
pelicula.actors = [pro1, pro2];
pelicula.director = pro4;
pelicula.writer = pro3;
var pelicula2 = new movie_1.Movie("V de vendetta", 2010, "inglesa", "accion");
var peliculas0 = [pelicula, pelicula2];
var imdb1 = new imdb_1.Imdb();
imdb1.peliculas = peliculas0;
//console.log(imdb1.printPeliculas());
// let imdbToString = JSON.stringify(imdb1)
// fs.writeFileSync("IMDB.json",imdbToString)
// console.log(imdbToString);
// console.log(imdb1.escribirEnFicheroJSON("pruebafinal.ts"));
imdb1.escribirEnFicheroJSON("./newfile.json");
var nuevoProfessional = new professional_1.Professional("omar", 19, 80, 190, true, "español", 0, "actor");
var userName = readlineSync.question(nuevoProfessional);
console.log("hola" + nuevoProfessional + "!");
