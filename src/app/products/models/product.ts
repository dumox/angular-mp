export class Product {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public amount: number,
        public isAvailable: boolean,
        public isBought: boolean = false // как вариант
        ) {
            // this.isBought = false;
    }
}
