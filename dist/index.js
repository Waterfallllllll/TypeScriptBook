import { City, Person, Product, Employee } from "./dataTypes.js";
let people = [
    new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York"),
];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 813), new City("Paris", 214)];
let employees = [new Employee("Bob Smith", "Sales"), new Employee("Alice Jones", "Sales")];
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
class SearchableCollection extends DataCollection {
    constructor(initialItems) {
        super(initialItems);
    }
    find(searchTerm) {
        return this.items.filter(item => {
            if (item instanceof Employee) {
                return item.name === searchTerm || item.role === searchTerm;
            }
            else if (item instanceof Person) {
                return item.name === searchTerm || item.city === searchTerm;
            }
        });
    }
}
let employeeData = new SearchableCollection(employees);
employeeData.find("Sales").forEach(e => console.log(`Employee ${e.name}, ${e.role}`));
