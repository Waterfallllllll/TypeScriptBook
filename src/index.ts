type Person = {
    id: string;
    name: string;
    city: string;
};

class Employee {
    private city: string;

    constructor(public readonly id: string, public name: string, private dept: string, city: string) {
        this.city = city;
    }

    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }

    get location() {
        switch (this.city) {
            case "Paris":
                return "France";
            case "London":
                return "UK";
            default:
                return this.city;
        }
    }

    get details() {
        return `${this.name}, ${this.dept}, ${this.location}`;
    }
}
 
let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
console.log(`Location: ${salesEmployee.location}`);
console.log(`Details: ${salesEmployee.details}`);

