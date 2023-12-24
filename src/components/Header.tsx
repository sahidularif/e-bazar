import NaVBar from './NavBar';
const Header = () => {
    return (
        <div className=''>
            <NaVBar />
            <div className="bg-gray-800 mt-10 text-white py-16 px-16 h-96">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-extrabold mb-4">
                        Welcome to E-Bazar
                    </h1>
                    <p className="text-lg mb-8">
                        Discover a wide range of fashion wear at great prices.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;