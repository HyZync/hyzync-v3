import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import ReactPaginate from 'react-paginate';
import './Career.css'; // Import custom styles

const Career = () => {
    useDocTitle('Careers');
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [filterLocation, setFilterLocation] = useState("");
    const [filterType, setFilterType] = useState("");

    const jobs = [
        {
            id: 1,
            title: "Software Engineer",
            description: "We are looking for a skilled Software Engineer to join our team.",
            location: "New York, NY",
            type: "Full-time",
            img: "https://via.placeholder.com/150",
            link: "https://example.com/software-engineer"
        },
        {
            id: 2,
            title: "Product Manager",
            description: "An experienced Product Manager is needed to lead our product team.",
            location: "San Francisco, CA",
            type: "Full-time",
            img: "https://via.placeholder.com/150",
            link: "https://example.com/product-manager"
        },
        {
            id: 3,
            title: "UX Designer",
            description: "Creative UX Designer wanted to create intuitive user experiences.",
            location: "Austin, TX",
            type: "Part-time",
            img: "https://via.placeholder.com/150",
            link: "https://example.com/ux-designer"
        },
        // Add more jobs as needed
    ];

    const jobsPerPage = 3;
    const pagesVisited = currentPage * jobsPerPage;

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
    };

    const handleLocationFilter = (e) => {
        setFilterLocation(e.target.value);
    };

    const handleTypeFilter = (e) => {
        setFilterType(e.target.value);
    };

    const filteredJobs = jobs
        .filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(job => filterLocation ? job.location === filterLocation : true)
        .filter(job => filterType ? job.type === filterType : true);

    const displayJobs = filteredJobs.slice(pagesVisited, pagesVisited + jobsPerPage);

    const pageCount = Math.ceil(filteredJobs.length / jobsPerPage);

    return (
        <>
            <NavBar />
            <div id='career-page' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-5 flex flex-col items-center">
                    <div className="w-full bg-white p-12 my-4 md:px-16 lg:w-11/12 lg:px-32 rounded-2xl shadow-2xl">
                        <div className="flex justify-center">
                            <h1 className="font-bold text-center text-blue-900 uppercase text-4xl">Careers</h1>
                        </div>
                        <div className="mt-8 w-full flex flex-wrap justify-between items-center">
                            <input
                                type="text"
                                placeholder="Search jobs..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="w-full md:w-1/3 p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <select value={filterLocation} onChange={handleLocationFilter} className="w-full md:w-1/4 p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">All Locations</option>
                                <option value="New York, NY">New York, NY</option>
                                <option value="San Francisco, CA">San Francisco, CA</option>
                                <option value="Austin, TX">Austin, TX</option>
                                {/* Add more locations as needed */}
                            </select>
                            <select value={filterType} onChange={handleTypeFilter} className="w-full md:w-1/4 p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">All Types</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Remote">Remote</option>
                                {/* Add more types as needed */}
                            </select>
                        </div>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {displayJobs.map((job) => (
                                <div key={job.id} className="job-card p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 fade-in">
                                    <img
                                        src={job.img}
                                        alt={job.title}
                                        className="rounded-lg w-full hover:scale-105 transition-transform duration-300"
                                    />
                                    <h2 className="mt-4 text-2xl font-bold text-gray-800">{job.title}</h2>
                                    <p className="mt-2 text-gray-600">{job.description}</p>
                                    <p className="mt-2 text-gray-600">Location: {job.location}</p>
                                    <p className="mt-2 text-gray-600">Type: {job.type}</p>
                                    <a 
                                        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block"
                                        href={job.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Apply
                                    </a>
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

export default Career;
