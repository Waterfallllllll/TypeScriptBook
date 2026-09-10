function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

const enum Product {Hat, Gloves, Umbrella}
let productValue = Product.Hat;


let restrictedValue: 1 | 2 | 3 = 1;
let secondValue: 1 | 10 | 100 = 1;

restrictedValue = secondValue;
secondValue = 100;
restrictedValue = secondValue;

console.log(`Value: ${restrictedValue}`);