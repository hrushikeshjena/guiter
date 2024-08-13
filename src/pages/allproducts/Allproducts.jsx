

import React, { useContext, useEffect, useState } from 'react';
import Filter from '../../components/filter/Filter';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Allproducts() {
    const context = useContext(myContext);
    const { mode, product, searchkey, filterType, filterBrandName, filterTitle } = context;

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const addCart = (product) => {
        if (product.stockStatus === 'Out of Stock') {
            toast.error('This product is out of stock');
            return;
        }
        dispatch(addToCart(product));
        toast.success('Added to cart');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
        console.log('Cart Items:', cartItems);
    }, [cartItems]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Filter products based on search key, category, title, and brand name
    const filteredProducts = product.filter((item) => {
        return (
            (searchkey ? item.title.toLowerCase().includes(searchkey.toLowerCase()) : true) &&
            (filterType ? item.category.toLowerCase() === filterType.toLowerCase() : true) &&
            (filterTitle ? item.title.toLowerCase() === filterTitle.toLowerCase() : true) &&
            (filterBrandName ? item.brandName.toLowerCase() === filterBrandName.toLowerCase() : true)
        );
    });

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const nextPage = () => {
        if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 mt-10" style={{ maxWidth: '1500px' }}>
                <h1 className={`text-center text-3xl font-bold mb-10 ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                    Our Latest Collection
                </h1>
                <Filter />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 mb-8">
                    {currentProducts.length > 0 ? (
                        currentProducts.map((item, index) => {
                            const {
                                title,
                                price,
                                salePrice,
                                brandName,
                                imageUrl,
                                id,
                                stockStatus,
                            } = item;

                            return (
                                <div
                                    key={index}
                                    className={`rounded-lg shadow-lg overflow-hidden ${
                                        mode === 'dark' ? 'bg-gray-900' : 'bg-white'
                                    }`}
                                    style={{
                                        backgroundColor: mode === 'dark' ? '#282c34' : '#acaef5',
                                    }}
                                >
                                    <div className="w-full h-64">
                                        <img
                                            src={imageUrl}
                                            alt={title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'default-image-path.jpg';
                                            }}
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3
                                            className={`text-lg font-semibold ${
                                                mode === 'dark' ? 'text-white' : 'text-black'
                                            }`}
                                        >
                                            {title}
                                        </h3>
                                        <p
                                            className={`mt-2 text-gray-600 truncate ${
                                                mode === 'dark' ? 'text-white' : ''
                                            }`}
                                            style={{
                                                display: '-webkit-box',
                                                WebkitLineClamp: 3,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {item.description}
                                        </p>
                                        <Link to={`/productinfo/${id}`} className="text-blue-500">
                                            See More
                                        </Link>
                                        <p
                                            className={`mt-2 font-semibold ${
                                                mode === 'dark' ? 'text-white' : 'text-black'
                                            }`}
                                        >
                                            Brand: {brandName}
                                        </p>
                                        <p
                                            className={`mb-3 font-semibold ${
                                                stockStatus === 'Out of Stock'
                                                    ? 'text-red-500'
                                                    : 'text-green-500'
                                            }`}
                                        >
                                            {stockStatus}
                                        </p>
                                        <div className="mt-3 flex items-center justify-between">
                                            <div>
                                                {salePrice ? (
                                                    <>
                                                        <span
                                                            className={`text-xl font-bold ${
                                                                mode === 'dark'
                                                                    ? 'text-white'
                                                                    : 'text-black'
                                                            }`}
                                                        >
                                                            ₹{salePrice}
                                                        </span>
                                                        <span className="ml-2 text-lg line-through text-gray-500">
                                                            ₹{price}
                                                        </span>
                                                    </>
                                                ) : (
                                                    <span
                                                        className={`text-xl font-bold ${
                                                            mode === 'dark'
                                                                ? 'text-white'
                                                                : 'text-black'
                                                        }`}
                                                    >
                                                        ₹{price}
                                                    </span>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => addCart(item)}
                                                className={`px-3 py-2 ${
                                                    mode === 'dark'
                                                        ? 'bg-white text-black'
                                                        : 'bg-blue-500 text-white'
                                                } text-sm font-medium rounded`}
                                                disabled={stockStatus === 'Out of Stock'}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-span-4 text-center text-gray-500">
                            No products found.
                        </div>
                    )}
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={prevPage}
                        className={`mx-2 px-3 py-2 ${
                            mode === 'dark' ? 'bg-white text-black' : 'bg-blue-500 text-white'
                        } text-sm font-medium rounded`}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button
                        onClick={nextPage}
                        className={`mx-2 px-3 py-2 ${
                            mode === 'dark' ? 'bg-white text-black' : 'bg-blue-500 text-white'
                        } text-sm font-medium rounded`}
                        disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
                    >
                        Next
                    </button>
                </div>
            </div>
            <div className="h-20"></div>
        </Layout>
    );
}

export default Allproducts;
