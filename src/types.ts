export interface Product {
  _id: string;
  name: string;
  type: string;
  colours: string[];
}

export interface ProductType {
  _id: string;
  name: string;
}

export interface Colour {
  _id: string;
  name: string;
  hexCode?: string;
}