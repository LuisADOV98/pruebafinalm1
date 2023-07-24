"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, weight, height, isRetired, nationality, oscarNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarNumber;
        this.profession = profession;
    }
    Professional.prototype.printProfessional = function () {
        return "\n        name - ".concat(this.name, "\n        age - ").concat(this.age, "\n        weight - ").concat(this.weight, "\n        height - ").concat(this.height, "\n        is Retired - ").concat(this.isRetired, "\n        nationality - ").concat(this.nationality, "\n        Oscars number - ").concat(this.oscarsNumber, "\n        Profession - ").concat(this.profession);
    };
    return Professional;
}());
exports.Professional = Professional;
