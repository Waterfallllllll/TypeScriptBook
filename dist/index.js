import { City, Person, Product } from "./dataTypes.js";
let people = [
    new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York"),
];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 813), new City("Paris", 214)];
class DataCollection {
    items = [];
    constructor(initialItems) {
        this.items.push(...initialItems);
    }
    collate(targetData, itemProp, targetProp) {
        let results = [];
        this.items.forEach(item => {
            let match = targetData.find(d => d[targetProp] === item[itemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }
}
let peopleData = new DataCollection(people);
let collatedData = peopleData.collate(cities, "city", "name");
collatedData.forEach(c => console.log(`${c.name}. ${c.city}, ${c.population}`));
