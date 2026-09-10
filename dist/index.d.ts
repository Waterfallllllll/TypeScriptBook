declare function calculateTax(amount: number): number;
declare function writePrice(product: string, price: number): void;
declare const enum Product {
    Hat = 0,
    Gloves = 1,
    Umbrella = 2
}
declare let productValue: Product;
declare let restrictedValue: 1 | 2 | 3;
declare let secondValue: 1 | 10 | 100;
