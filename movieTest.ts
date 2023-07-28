import { Professional } from "./professional";
import { Movie } from "./movie";

let pro4: Professional = new Professional("silvestre stallone",58,85,183,false,"estadounidense",3,"actor,gionista");
let pro5: Professional = new Professional("ashton kutcher",45,87,189,false,"estadounidense",0,"actor")
let pro6: Professional = new Professional("Julia roberts",55,60,173,false,"estadounidense",1,"actriz")
let pro7: Professional = new Professional("steven spilber", 80, 78, 170, false, "estadounidense", 1, "director")
let pro8: Professional= new Professional("quentin Tarantino",74,70,180,false,"italiano", 1,"writer")
let pelicula:Movie = new Movie("mujer bonita", 2000,"estados unidos","romance")

pelicula.actors = [pro4,pro5,pro6]
pelicula.director = pro7
pelicula.writer = pro8

console.log(pelicula.printMovie());

