let bob = { id: "bsmith", name: "Bob", city: "London", company: "Acme Co", dept: "Sales" };
let dataItems = [bob];
dataItems.forEach((item) => {
    console.log(`Person: ${item.id}, ${item.name}, ${item.city} `);
    console.log(`Prdouct: ${item.id}, ${item.company}, ${item.dept}`);
});
