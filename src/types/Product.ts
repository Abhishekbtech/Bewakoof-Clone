export interface ApiResponse {
    status: string;
    results: number;
    data: Product[];
}

export interface Product {
    seller: {
        name: string;
    };
    type: string | null;
    _id: string;
    name: string;
    description: string;
    price: number;
    fabric: string | null;
    brand: string;
    category: string;
    subCategory: string;
    features: string[];
    videos: string[];
    size: string[]; // Assuming size is an array of strings, change if needed
    theme: string | null;
    sellerTag: string;
    color: string | null;
    displayImage: string;
    ratings: number;
}