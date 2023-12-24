// src/OffCanvasCartItems.tsx

import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks/useTypeSelector';
import { CartItem, addProductToCart, removeProductFromCart, } from '../redux/reducer/cartSlice';
import { Product } from '../redux/reducer/productSlice'
interface OffCanvasCartItemsProps {
    cartItems: CartItem[];
    onCheckout: () => void;
}

const OffCanvasCartItems: React.FC<OffCanvasCartItemsProps> = ({
    cartItems,
    onCheckout,
}) => {
    console.log(cartItems);
    const dispatch = useAppDispatch()
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const { products, totalPrice } = useAppSelector((state) => state.cart);
    const handleDeleteProduct = (id: string) => {
        dispatch(removeProductFromCart({ id: id, full: true }))
    }

    const handleIncreaseProduct = (product: Product) => {
        dispatch(addProductToCart({ product: product }))
    }

    const handleDecreaseProduct = (pd: string) => {
        dispatch(removeProductFromCart({ id: pd }))
    }
    return (
        <div>
            {/* Cart items */}
            <div className="p-4">
                {products.map((product) => (
                    <div key={product._id} className="flex items-center mb-4">
                        <img src={product.images[0]} alt={product.title} className="w-12 h-12 object-cover mr-4" />
                        <div>
                            <p className="text-gray-700">{product.title}</p>
                            <div className="flex items-center mt-2">
                                <button
                                    onClick={() => handleDecreaseProduct(product._id)}
                                    className="bg-gray-300 px-2 py-1 text-sm rounded-l"
                                >
                                    -
                                </button>
                                <span className="px-4">{product.quantity}</span>
                                <button
                                    onClick={() => handleIncreaseProduct(product)}
                                    className="bg-gray-300 px-2 py-1 text-sm rounded-r"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="ml-auto">
                            <p className="text-gray-700">${product.price * product.quantity}</p>
                            <button
                                onClick={() => handleDeleteProduct(product._id)}
                                className="text-red-500 text-sm mt-2 focus:outline-none"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Cart total */}
            <div className="flex justify-between items-center p-4 border-t">
                <p className="text-gray-700">Total:</p>
                <p className="text-lg font-semibold">${calculateTotalPrice()}</p>
            </div>

            {/* Checkout button */}
            <div className="p-4">
                <button
                    onClick={onCheckout}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default OffCanvasCartItems;
