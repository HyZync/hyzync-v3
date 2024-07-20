import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import ReactPaginate from 'react-paginate';
import './ProductPage.css'; // Import custom styles

const ProductPage = (props) => {
    useDocTitle('Products');
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc"); // Sort order state
    const [currentPage, setCurrentPage] = useState(0);

    const products = [
        {
            id: 1,
            name: "Product 1",
            description: "This is a great product that solves many problems.",
            price: 100,
            img: "https://via.placeholder.com/150",
            rating: 4.5
        },
        {
            id: 2,
            name: "Product 2",
            description: "An amazing product with fantastic features.",
            price: 200,
            img: "https://via.placeholder.com/150",
            rating: 4.8
        },
        {
            id: 3,
            name: "Product 3",
            description: "A must-have product for anyone looking for quality.",
            price: 150,
            img: "https://via.placeholder.com/150",
            rating: 4.2
        },
        // Add more products as needed
    ];

    const productsPerPage = 3;
    const pagesVisited = currentPage * productsPerPage;

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSort = (e) => {
        setSortOrder(e.target.value);
    };

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const filteredProducts = products
        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price);

    const displayProducts = filteredProducts.slice(pagesVisited, pagesVisited + productsPerPage);

    const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

    return (
        <>
            <NavBar />
            <div id='product-page' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-5 flex flex-col items-center">
                    <div className="w-full bg-white p-12 my-4 md:px-16 lg:w-11/12 lg:px-32 rounded-2xl shadow-2xl">
                        <div className="flex justify-center">
                            <h1 className="font-bold text-center text-blue-900 uppercase text-4xl">Products</h1>
                        </div>
                        <div className="mt-8 w-full">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <select value={sortOrder} onChange={handleSort} className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="asc">Sort by Price: Low to High</option>
                                <option value="desc">Sort by Price: High to Low</option>
                            </select>
                        </div>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {displayProducts.map((product) => (
                                <div key={product.id} className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="rounded-lg w-full hover:scale-105 transition-transform duration-300"
                                    />
                                    <h2 className="mt-4 text-2xl font-bold text-gray-800">{product.name}</h2>
                                    <p className="mt-2 text-gray-600">{product.description}</p>
                                    <p className="mt-2 text-gray-600">Rating: {product.rating}</p>
                                    <p className="mt-2 text-gray-600">₹{product.price}</p>
                                    <button 
                                        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                                        onClick={() => alert(`Buying ${product.name}`)}
                                    >
                                        Buy
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                breakLabel={"..."}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={3}
                                onPageChange={handlePageClick}
                                containerClassName={"pagination"}
                                activeClassName={"active"}
                                pageClassName={"page-item"}
                                pageLinkClassName={"page-link"}
                                previousClassName={"page-item"}
                                previousLinkClassName={"page-link"}
                                nextClassName={"page-item"}
                                nextLinkClassName={"page-link"}
                                breakClassName={"page-item"}
                                breakLinkClassName={"page-link"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductPage;
