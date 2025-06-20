export interface Product {
    id:number,
    name:string;
    description:string;
    price:number;
    thumbnail?:string
    images?:string[];
    rating?:number;
    details?:string;
    sizes?:string[]
    reviews:number;
    colors?:{name:string,code:string}[]
    category:string;
    shippingInfo?:string
}