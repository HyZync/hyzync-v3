import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
import Notiflix from 'notiflix';

const Contact = () => {
    useDocTitle('Hyzync');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    const clearErrors = () => {
        setErrors([]);
    };

    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';
        let fData = new FormData();
        fData.append('first_name', firstName);
        fData.append('last_name', lastName);
        fData.append('email', email);
        fData.append('phone_number', phone);
        fData.append('message', message);

        axios({
            method: 'post',
            url: process.env.REACT_APP_CONTACT_API,
            data: fData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(function (response) {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'send message';
                clearInput();
                Notiflix.Report.success('Success', response.data.message, 'Okay');
            })
            .catch(function (error) {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'send message';
                const { response } = error;
                if (response.status === 500) {
                    Notiflix.Report.failure('An error occurred', response.data.message, 'Okay');
                }
                if (response.data.errors !== null) {
                    setErrors(response.data.errors);
                }
            });
    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id="contact" className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24" data-aos="fade-up">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={sendEmail} data-aos="fade-up">
                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl" data-aos="fade-right">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Send us a message</h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div data-aos="fade-left">
                                    <input
                                        name="first_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="First Name*"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && <p className="text-red-500 text-sm">{errors.first_name}</p>}
                                </div>

                                <div data-aos="fade-left">
                                    <input
                                        name="last_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && <p className="text-red-500 text-sm">{errors.last_name}</p>}
                                </div>

                                <div data-aos="fade-right">
                                    <input
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>

                                <div data-aos="fade-right">
                                    <input
                                        name="phone_number"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number"
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && <p className="text-red-500 text-sm">{errors.phone_number}</p>}
                                </div>
                            </div>
                            <div className="my-4" data-aos="fade-up">
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>
                            <div className="my-2 w-1/2 lg:w-2/4" data-aos="fade-down">
                                <button
                                    type="submit"
                                    id="submitBtn"
                                    className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl" data-aos="fade-left">
                        <div className="flex flex-col text-white">
                            <div className="flex my-4 w-2/3 lg:w-3/4" data-aos="fade-right">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Office Address</h2>
                                    <p className="text-gray-400">Santa Clara, California</p>
                                </div>
                            </div>
                            <div className="flex my-4 w-2/3 lg:w-1/2" data-aos="fade-left">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-gray-400">Tel: +1 (590) 238-3597</p>
                                    <div className="mt-5">
                                        <h2 className="text-2xl">Send an E-mail</h2>
                                        <p className="text-gray-400">info@hyzync.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex my-4 w-2/3 lg:w-1/2" data-aos="fade-up">
                                <a href="https://www.facebook.com/profile.php?id=61553906507497" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current font-black hover:animate-pulse">
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/hyzync/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current font-black hover:animate-pulse">
                                        <circle cx="4.983" cy="5.009" r="2.188"></circle>
                                        <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                                    </svg>
                                </a>
                                <a href="https://www.twitter.com/profile.php?id=61553906507497" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current font-black hover:animate-pulse">
                                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.37 4.37 0 0 0 1.92-2.41c-.84.5-1.77.87-2.76 1.06a4.41 4.41 0 0 0-7.5 4c-3.67-.18-6.94-1.94-9.12-4.61a4.41 4.41 0 0 0-.6 2.22 4.39 4.39 0 0 0 1.96 3.66 4.39 4.39 0 0 1-2-.55v.06a4.41 4.41 0 0 0 3.54 4.32 4.4 4.4 0 0 1-2 .07 4.42 4.42 0 0 0 4.13 3.07A8.86 8.86 0 0 1 2 19.54 12.46 12.46 0 0 0 8.29 21c7.55 0 11.67-6.26 11.67-11.67 0-.18-.01-.36-.02-.54A8.35 8.35 0 0 0 22.46 6z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
