import { Professional } from "./professional";


let pro1: Professional = new Professional("leonardo", 48,75,183,false,"estadounidense",1,"actor")
let pro2: Professional = new Professional("cillian", 47,75,175,false,"irlandes",0,"actor")
let pro3: Professional = new Professional("ana", 35, 55, 168,false,"cubana",0,"actriz")

console.log(pro1.printProfesional());
console.log(pro2.printProfesional());
console.log(pro3.printProfesional());