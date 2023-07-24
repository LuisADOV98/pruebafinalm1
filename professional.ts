
export class Professional{
    public name:string
    public age:number
    public weight:number
    public height:number
    public isRetired:boolean
    public nationality:string
    public oscarsNumber:number
    public profession:string

    constructor(name:string,age:number,weight:number,height:number,isRetired:boolean,nationality:string,oscarNumber:number,profession:string){
        this.name = name
        this.age = age
        this.weight = weight
        this.height = height
        this.isRetired = isRetired
        this.nationality = nationality
        this.oscarsNumber = oscarNumber
        this.profession = profession
    }

    printProfessional():string{
        return `
        name - ${this.name}
        age - ${this.age}
        weight - ${this.weight}
        height - ${this.height}
        is Retired - ${this.isRetired}
        nationality - ${this.nationality}
        Oscars number - ${this.oscarsNumber}
        Profession - ${this.profession}`
    }
}