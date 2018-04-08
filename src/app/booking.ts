export class Booking {
    public visible: boolean = false;
    constructor(
        public code: number,
        public name: string,
        public date: string,
        public father: string,
        public fatherphone: string,
        public mother: string,
        public motherphone: string
    ) { }
}
