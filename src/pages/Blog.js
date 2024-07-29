import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import { DiscussionEmbed } from 'disqus-react';
import ReactPaginate from 'react-paginate';
import './Blog.css'; // Import custom styles

const Blog = (props) => {
    useDocTitle('Hyzync');
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(0);

    const postsPerPage = 3; // Adjust the number of posts per page
    const offset = currentPage * postsPerPage;

    const linkedinPosts = [
        {
            url: "https://www.linkedin.com/posts/hyzync_ai-innovation-healthcare-activity-7222863960343990272-zERa?utm_source=share&utm_medium=member_desktop",
            img: "https://media.licdn.com/dms/image/D5622AQGrXxv3zpSb-Q/feedshare-shrink_800/0/1722064960504?e=1724889600&v=beta&t=zxHmNcRwOodRkemeq1tYUzL3w0JTFfxP1tVfoPyXx20",
            description: "Human-AI Synergy: Transforming Medical Diagnostics",
            author: "Bionic",
            date: "2024-07-27"
        },
        {
            url: "https://www.linkedin.com/posts/hyzync_ai-innovation-data-activity-7220369692366970880-eHhr?utm_source=share&utm_medium=member_desktop",
            img: "https://media.licdn.com/dms/image/D5622AQH6iZHRWdyMGA/feedshare-shrink_800/0/1721470281469?e=1724284800&v=beta&t=g1Jzjqrko3wA1qniq7GrhxeK_T3_zwr1akD0i0rq390",
            description: "Prioritize cardiac health, Choose Bionic, live free.",
            author: "Bionic",
            date: "2024-07-20"
        },
        {
            url: "https://www.linkedin.com/posts/hyzync_ai-innovation-healthcare-activity-7218259094007164928-9SI4?utm_source=share&utm_medium=member_desktop",
            img: "https://media.licdn.com/dms/image/D5622AQFlj5OFP-OM4Q/feedshare-shrink_800/0/1720967075280?e=1724284800&v=beta&t=9HIEJpwXKSm089tJbGOmL0RR5T1wKXCSh1BMhrOiFlk",
            description: "Ready to redefine cardiac healthcare?",
            author: "Bionic",
            date: "2024-07-15"
        },
        {
            url: "https://www.linkedin.com/posts/hyzync_knowing-your-risk-and-acting-early-can-make-activity-7213408142032875521--lmK?utm_source=share&utm_medium=member_desktop",
            img: "https://media.licdn.com/dms/image/D5622AQFLJTGDpY9YFQ/feedshare-shrink_800/0/1719810517974?e=1724284800&v=beta&t=Drz6QECYp_A3S7_fxgn2zTvmRLh6l4DHAgmxzK2tgI4",
            description: "Know your risk, act early.",
            author: "Bionic",
            date: "2024-07-08"
        },
        // Add more posts here
    ];

    const filteredPosts = linkedinPosts.filter(post =>
        post.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentPosts = filteredPosts.slice(offset, offset + postsPerPage);
    const pageCount = Math.ceil(filteredPosts.length / postsPerPage);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const disqusShortname = "hyzync"; // Replace with your Disqus shortname
    const disqusConfig = {
        url: window.location.href,
        identifier: window.location.pathname,
        title: "Blog"
    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='blog' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-5 flex flex-col items-center" data-aos="zoom-in">
                    <div className="w-full bg-white p-12 my-4 md:px-16 lg:w-11/12 lg:px-32 rounded-2xl shadow-2xl">
                        <div className="flex justify-center">
                            <h1 className="font-bold text-center text-blue-900 uppercase text-4xl">Latest</h1>
                        </div>
                        <div className="mt-8 w-full">
                            <input
                                type="text"
                                placeholder="Search blog posts..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {currentPosts.map((post, index) => (
                                <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={post.img}
                                            alt={`LinkedIn Post ${index + 1}`}
                                            className="rounded-lg w-full hover:scale-105 transition-transform duration-300"
                                        />
                                    </a>
                                    <p className="mt-4 text-gray-800">{post.description}</p>
                                    <p className="mt-2 text-gray-600">By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
                                    <div className="mt-2">
                                        <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                            Read more
                                        </a>
                                    </div>
                                    <div className="mt-4 flex space-x-4">
                                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(post.url)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                            <i className="fab fa-linkedin"></i> Share on LinkedIn
                                        </a>
                                        <a href={`https://twitter.com/share?url=${encodeURIComponent(post.url)}&text=${encodeURIComponent(post.description)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                            <i className="fab fa-twitter"></i> Share on Twitter
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <ReactPaginate
                                previousLabel={"previous"}
                                nextLabel={"next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}
                            />
                        </div>
                    </div>
                    <div className="w-full bg-white p-12 my-4 md:px-16 lg:w-11/12 lg:px-32 rounded-2xl shadow-2xl mt-8">
                        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blog;
