function check(expression) {
    if (!expression) {
        throw new Error("Expression is false");
    }
}
function calculateTax(amount) {
    check(typeof amount == "number");
    return amount * 1.2;
}
let taxAmount = calculateTax(100);
console.log(`Tax value: ${taxAmount}`);
