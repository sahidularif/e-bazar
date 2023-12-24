// src/OffCanvasCart.tsx

import React from 'react';
import OffCanvasCartItems from './OffCanvasCartItems';
import { useAppSelector } from '../redux/hooks/useTypeSelector';

interface OffCanvasCartProps {
    isOpen: boolean;
    onClose: () => void;
    onCheckout: () => void;
}

const OffCanvasCart: React.FC<OffCanvasCartProps> = ({
    isOpen,
    onClose,
    onCheckout,
}) => {
  const { products,  totalPrice } = useAppSelector((state) => state.cart);
    return (
        <div>
            {/* Overlay */}
            <div
                className={`fixed inset-0 z-50 bg-black opacity-50 ${isOpen ? 'block' : 'hidden'}`}
                onClick={onClose}
            ></div>

            {/* Off-canvas cart */}
            <div
                className={`fixed inset-y-0 right-0 z-50 w-80 bg-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform ease-in-out duration-300 overflow-y-auto`}
            >
                {/* Cart header */}
                <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
                    <h2 className="text-lg font-semibold"><i className='bx bxs-shopping-bag-alt'></i> Shopping Cart</h2>
                    <button onClick={onClose} className="text-white focus:outline-none">
                        Close
                    </button>
                </div>

                {/* Cart items */}
                <OffCanvasCartItems
                    cartItems={products}
                    onCheckout={onCheckout}
                />
            </div>
        </div>
    );
};

export default OffCanvasCart;
