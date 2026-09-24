import { Product, Employee } from "./dataTypes.js";
function getValue(item, keyname) {
    return item[keyname];
}
let p = new Product("Running Shoes", 100);
console.log(getValue(p, "name"));
console.log(getValue(p, "price"));
let e = new Employee("Bob Smith", "Sales");
console.log(getValue(e, "name"));
console.log(getValue(e, "role"));
