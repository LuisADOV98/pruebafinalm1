"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = [];
        this.nacionality = nacionality;
        this.director;
        this.writer;
        this.language = "ingles";
        this.plataforma = "hbo";
        this.isMCU = false;
        this.mainCharacterName = "rocky";
        this.producer = "scorcese";
        this.distributor = "cinemax";
        this.genre = "accion";
    }
    Movie.prototype.printMovie = function () {
        return "\n        title:             ".concat(this.title, "\n        releaseYear:       ").concat(this.releaseYear, "\n        arctors:           ").concat(this.actors, "\n        nacionality:       ").concat(this.nacionality, "\n        director:          ").concat(this.director, "\n        writer:            ").concat(this.writer, "\n        language:          ").concat(this.language, "\n        plataforma         ").concat(this.plataforma, "\n        isMCU              ").concat(this.isMCU, "\n        mainCharacterName: ").concat(this.mainCharacterName, " \n        producer:          ").concat(this.producer, "\n        distributor:       ").concat(this.distributor, "\n        genre:             ").concat(this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
