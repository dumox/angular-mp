export class Order {
    constructor(
        public id: number,
        public productId: number,
        public name: string,
        public quantity: number,
        public price: number,
        public cost?: number
    ) {
        this.quantity = quantity || 1;
        this.cost = this.quantity * this.price;
    }
}
