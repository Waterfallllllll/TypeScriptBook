type Person = {
    id: string;
    name: string;
    city: string;
};
type Employee = {
    company: string;
    dept: string;
};
declare let bob: {
    id: string;
    name: string;
    city: string;
    company: string;
    dept: string;
};
declare let dataItems: (Person & Employee)[];
