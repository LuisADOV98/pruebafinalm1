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
        return "\n        ".concat(this.name, "\n        ").concat(this.age, "\n        ").concat(this.weight, "\n        ").concat(this.height, "\n        ").concat(this.isRetired, "\n        ").concat(this.nationality, "\n        ").concat(this.oscarsNumber, "\n        ").concat(this.profession);
    };
    return Professional;
}());
exports.Professional = Professional;
// name - ${this.name}
// age - ${this.age}
// weight - ${this.weight}
// height - ${this.height}
// isRetired - ${this.isRetired}
// Nationality - ${this.nationality}
// oscarNumber - ${this.oscarsNumber}
// profession - ${this.profession}`
// }
