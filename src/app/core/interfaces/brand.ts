import { head } from "./head";

export class brand {
    id: string;
    name?: string;
    logo?: string;
    head?: head[];
    flavours?: [];    

    constructor(brand: any){
        this.id = brand.id
        this.name = brand.name
        this.logo = brand.logo
        this.head = new Array<head>;
        this.flavours = brand.flavours
    }
}