interface ProductsInterface {
    _id: string;
    productId: string;
    title: string;
    quantity: number
}
interface addressInterFace {
    city: string;
    country: string;
    line1: string;
    line2: string;
    state: string;
    postal_code: string;
}
export interface OrderInterface {
    createdAt: string;
    _id: number;
    delivery_status: string;
    payment_status: string;
    subtotal: number;
    total: number;
    userId: string;
    products: ProductsInterface[];
    shipping: {
        address: addressInterFace;
        email: string;
        name: string;
        phone: string | null;
        tax_exempt: string;
    };
    updatedAt: string;
    __v: number;
}