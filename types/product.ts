export type Product = {
    id: number;
    categoryId: number;
    name: string;
    shortDescription: string;
    longDescription: string;
    rating: number;
    imageUrl: string;
    inStock: boolean;
    reviewCount: number;
    price: number; // in JOD
    brand: string;
    specifications: Specifications;
};

type DefaultSpecs = {
    color: string;
    weight: string;
};

type SmartphoneSpecs = DefaultSpecs & {
    storage: string;
    batteryLifeHours: number;
    connectivity: string;
};

type HeadphonesSpecs = DefaultSpecs & {
    connectivity: string;
    batteryLifeHours: number;
};

type TVSpecs = DefaultSpecs & {
    screenSize: string;
    resolution: string;
    smartFeatures: boolean;
};

type LaptopSpecs = DefaultSpecs & {
    processor: string;
    ram: string;
    storage: string;
};

type BookSpecs = DefaultSpecs & {
    author: string;
    pages: number;
    language: string;
};

type ClothingSpecs = DefaultSpecs & {
    material: string;
    size: 'S' | 'M' | 'L' | 'XL';
};

type ToySpecs = DefaultSpecs & {
    ageGroup: string;
    material: string;
    pieces: number;
};

type GenericSpecs = DefaultSpecs;

type Specifications =
    | SmartphoneSpecs
    | HeadphonesSpecs
    | TVSpecs
    | LaptopSpecs
    | BookSpecs
    | ClothingSpecs
    | ToySpecs
    | GenericSpecs;
