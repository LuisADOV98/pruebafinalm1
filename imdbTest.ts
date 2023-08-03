import { log } from "console";
import { Imdb } from "./imdb";
import { Movie } from "./movie";
import { Professional } from "./professional";
let fs = require("fs");
let readlineSync = require('readline-sync');

let pro1: Professional = new Professional("luis", 25,100,181,false,"portugues",0,"actor")
let pro2: Professional = new Professional("jose", 28,80,188,false,"argentino",1,"actor")
let pro3: Professional = new Professional("omar",19,90,186,false,"dominicano",0,"writer")
let pro4: Professional = new Professional("jesus", 23,75,173,false,"peruano",0,"director")
let pelicula:Movie = new Movie("mujer bonita", 2000,"estados unidos","romance")
pelicula.actors = [pro1, pro2]
pelicula.director = pro4
pelicula.writer = pro3
let pelicula2:Movie = new Movie("V de vendetta", 2010, "inglesa", "accion")
let peliculas0:Movie[] = [pelicula, pelicula2]
let imdb1: Imdb = new Imdb()
imdb1.peliculas = peliculas0
//console.log(imdb1.printPeliculas());

// let imdbToString = JSON.stringify(imdb1)
// fs.writeFileSync("IMDB.json",imdbToString)
// console.log(imdbToString);


// console.log(imdb1.escribirEnFicheroJSON("pruebafinal.ts"));
// imdb1.escribirEnFicheroJSON("./newfile.json")

// let ultimoProfessional: Professional = new Professional("pedro", 40,86,178, true, "chileno", 0, "actor")
// let userName = readlineSync.question(ultimoProfessional);
// console.log("hola" + ultimoProfessional + "!");

let name = readlineSync.question("name") 
let age = readlineSync.question("age")
let weight = readlineSync.question("weight")
let height = readlineSync.question("height")
let isRetired = readlineSync.question("isRetired")
let nationality = readlineSync.question("nationality")
let oscarnumber = readlineSync.question("oscarnumber")
let profession = readlineSync.question("profession")
let FinalProfesional = new Professional(name, age, weight, height, isRetired, nationality, oscarnumber, profession);
console.log(FinalProfesional)