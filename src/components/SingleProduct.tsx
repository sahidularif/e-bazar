import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icolor } from '../redux/reducer/productSlice';

interface ProductProps {
    _id: string,
    title: string;
    color: Icolor;
    size: [string];
    price: number;
    images: [string];
    onAddToCart: () => void;
}

const Product: React.FC<ProductProps> = ({ title, color, price, size, images, _id, onAddToCart }) => {
    const navigate = useNavigate();

    const navigateToContacts = (id: string) => {
     if(!id){
        return 0
     }
     navigate(`/product/${id}`);
    };
    return (
        <div className="bg-white card p-4 shadow-md rounded-md border border-gray-300" onClick={()=>navigateToContacts(_id)}>
            <div className=''>
            <img src={images[0]} alt={title} className="w-full h-80  object-fill mb-4" />
            </div>
            <div className=' max-h-auto text-left card-body'>
                <div className='flex flex-row gap-5 mb-2'>
                    <span className='border px-2 bg-blue-500 text-white'>Color:</span>
                    <ul>
                        <li className={`h-8 w-8 bg-[${color.color1}]`}></li>
                        <li className={`h-8 w-8 bg-[${color.color2}]`}></li>
                        <li className={`h-8 w-8 bg-[${color.color3}]`}></li>
                    </ul>
                    <span className='border px-2 border-blue-500 text-black'>{size}</span>
                </div>
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-gray-600 mb-2">{price}</p>
                {/* <p className="text-gray-600 mb-2">{size}</p> */}
                {/* <button
                onClick={onAddToCart}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add to Cart
            </button> */}
            </div>
        </div>
    );
};

export default Product;