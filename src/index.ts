function check(expression: boolean): asserts expression {
    if (!expression) {
        throw new Error("Expression is false");
    }
}

function calculateTax(amount: number | null): number {
    check(typeof amount == "number");
    return amount * 1.2;
}

let taxAmount: number = calculateTax(100);
console.log(`Tax value: ${taxAmount}`);