export interface InterfaceData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Addressinterface;
    phone: number;
    website: string;
    company: CompanyInterface;
}

export interface Addressinterface {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: Geo;

}

export interface Geo {
 lat: number;
 lng: number;
}
export interface CompanyInterface {
    name: string;
    catchPhrase: string;
    bs: string;
}
