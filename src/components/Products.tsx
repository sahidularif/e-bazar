import { TProduct } from "../context/reducer/cartReducer";
import { useAppSelector } from "../redux/hooks/useTypeSelector";
import { addProductToCart } from "../redux/reducer/cartSlice";
import SingleProduct from "./SingleProduct";

const items: TProduct[] = [
    {
        id: 1,
        title: 'Product 1',
        description: '',
        color: 'Red',
        size: 'Medium',
        img_url: '/assets/product/jacket4.jpg',
        price: 30
    },
    {
        id: 2,
        title: 'Product 2',
        description: '',
        color: 'Blue',
        size: 'Large',
        img_url: '/assets/product/jacket5.jpg',
        price: 20
    },
    {
        id: 3,
        title: 'Product 1',
        description: '',
        color: 'Red',
        size: 'Medium',
        img_url: '/assets/product/jacket3.jpeg',
        price: 25
    },
    {
        id: 4,
        title: 'Product 2',
        description: '',
        color: 'Blue',
        size: 'Large',
        img_url: '/assets/product/jacket1.webp',
        price: 20
    },
    // Add more products as needed
];

const Products: React.FC = () => {
    const { data } = useAppSelector((state) => state.product);
    return (
        <div>
            <div className="heading text-left px-16 pt-16 ">
                <h1 className=" text-4xl font-bold text-black">Feathure Listing</h1>
                <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, consequuntur?</p>
            </div>
            <div className="container mx-auto px-16 my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                {data.map((item) => (
                    <SingleProduct
                        _id={item._id}
                        key={item._id}
                        title={item.title}
                        color={item.color}
                        price={item.price}
                        size={item.size}
                        images={item.images}
                        onAddToCart={() => addProductToCart(item)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
