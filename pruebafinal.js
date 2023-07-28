"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.printProfesional = function () {
        return "\n        name - ".concat(this.name, "\n        age - ").concat(this.age, "\n        weight - ").concat(this.weight, "\n        height - ").concat(this.height, "\n        isRetired - ").concat(this.isRetired, "\n        Nationality - ").concat(this.nationality, "\n        oscarNumber - ").concat(this.oscarsNumber, "\n        profession - ").concat(this.profession);
    };
    return Professional;
}());
exports.Professional = Professional;
