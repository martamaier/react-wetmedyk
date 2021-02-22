export interface User {
    id: number;
    userName: string;
    password: string;
    dateCreated: string;
}

export interface PlaceholderUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface Address {
    city: string;
    street: string;
    zipcode: string;
    suite: string;
    geo: Coordinates;
}

export interface Coordinates {
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}
