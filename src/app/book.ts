export class Book {
    public visible: boolean = false;
    public count: number = 0;
    constructor(
        public id: number,
        public course: string,
        public group: number,
        public name: string,
        public editorial: string,
        public lang: string,
        public ISBN: string,
        public price: number
    ) { }
}
