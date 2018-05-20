export class Course {
    constructor(
        public name: string,
        public value: string
    ) { }

    toString() {
        return this.name;
    }

    static getCourses() : Course[]{
        return [
            {name:"3º Infantil", value:"3 Inf"},
            {name:"4º Infantil", value:"4 inf"},
            {name:"5º Infantil", value:"5 inf"},
            {name:"1º Primaria", value:"1Pri"},
            {name:"2º Primaria", value:"2Pri"},
            {name:"3º Primaria", value:"3Pri"},
            {name:"4º Primaria", value:"4Pri"},
            {name:"5º Primaria", value:"5Pri"},
            {name:"1º ESO", value:"1ESO"},
            {name:"2º ESO", value:"2ESO"},
            {name:"3º ESO", value:"3ESO"},
            {name:"4º ESO", value:"4ESO"}
        ]

    }
}
