"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var professional_1 = require("./professional");
var pro1 = new professional_1.Professional("leonardo", 48, 75, 183, false, "estadounidense", 1, "actor");
var pro2 = new professional_1.Professional("cillian", 47, 75, 175, false, "irlandes", 0, "actor");
var pro3 = new professional_1.Professional("ana", 35, 55, 168, false, "cubana", 0, "actriz");
console.log(pro1.printProfessional());
console.log(pro2.printProfessional());
console.log(pro3.printProfessional());
