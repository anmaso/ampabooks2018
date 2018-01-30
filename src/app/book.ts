export class Book {
    public visible: boolean = false;
    public count: number = 0;
    constructor(
        public id: number,
        public group: number,
        public name: string,
        public editorial: string,
        public ISBN: string,
        public course: string,
        public lang: string,
        public price: number
    ) { }
}
