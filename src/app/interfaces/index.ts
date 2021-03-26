export interface IProduct {
    _id: string;
    rating: number;
    numReviews: number;
    price: number;
    countInStock: number;
    name: string;
    image: string;
    description: string;
    brand: string;
    category: string;
    user: string;
    createdAt: string;
    updatedAt: string;
    reviews: IReviewer[];
}

export interface IPage {
    products: IProduct[];
    page: string;
    pages: number;
}

export interface IReviewer {
    _id: string;
    name: string;
    rating: number;
    comment: string;
    user: string;
    createdAt: string;
    updatedAt: string;
    product_id: string;
}

export interface IProductAndCount {
    product: IProduct;
    count: number;
}
