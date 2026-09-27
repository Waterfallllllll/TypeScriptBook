import { Person, Product } from "./dataTypes.js";
function FilterArray(data, predicate) {
    return data.filter((item) => !predicate(item));
}
let dataArray = [new Product("Kayak", 275), new Person("Bob", "London")];
function isProduct(item) {
    return item instanceof Product;
}
let filteredData = FilterArray(dataArray, isProduct);
filteredData.forEach(item => console.log(`Person: ${item.name}`));
