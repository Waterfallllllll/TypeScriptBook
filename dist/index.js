function calculateTax(amount) {
    if (amount != null) {
        return amount * 1.2;
    }
    return null;
}
function writeValue(label, value) {
    console.log(`${label}: ${value}`);
}
let taxAmount = calculateTax(100);
// if (typeof taxAmount === "number") {
//     writeValue("Tax value", taxAmount);
// }
