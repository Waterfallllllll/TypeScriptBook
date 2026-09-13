let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = {
    id: 3,
    name: "Umbrella",
    price: 30,
};
let bob = { id: "bsmith", name: "Bob", city: "London" };
let dataItems = [hat, gloves, umbrella, bob];
function isPerson(testObj) {
    return testObj.city !== undefined;
}
dataItems.forEach((item) => {
    if (isPerson(item)) {
        console.log(`Person: ${item.name}: ${item.city}`);
    }
    else {
        console.log(`Prdouct: ${item.name}: ${item.price}`);
    }
});
