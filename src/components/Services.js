import React from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

const servicesData = [
    {
        img: img,
        title: 'Advanced AI',
        description: 'Bionic\'s Advanced AI utilizes core-set based models to deliver precise and efficient predictions in healthcare. This innovative approach optimizes data processing by focusing on representative subsets of data, enhancing the accuracy of risk assessments for cardiovascular events. By leveraging these advanced algorithms, Bionic empowers healthcare professionals with actionable insights and robust decision-making tools for improved patient outcomes.',
    },
    {
        img: img2,
        title: 'Bionic Secure',
        description: 'Prioritizing Health Data Security with Hyzync\'s Bionic. Our platform employs state-of-the-art encryption and secure data handling practices to ensure the confidentiality and integrity of patient information. Advanced security protocols safeguard health data at every stage, providing healthcare professionals with peace of mind while utilizing our innovative tools for risk prediction and critical heart condition analysis.',
    },
    {
        img: img3,
        title: 'Intelligent Correlations',
        description: 'Hyzync\'s Bionic leverages advanced intelligent correlation algorithms to deliver powerful insights into cardiovascular health. These algorithms analyze complex data sets to identify relationships between various health metrics, enabling precise risk predictions for fatal cardiovascular events. By uncovering hidden patterns and correlations, Bionic empowers healthcare professionals to make informed decisions and develop personalized treatment strategies, ultimately enhancing patient outcomes.',
    },
    {
        img: img4,
        title: 'Universal Connectivity',
        description: 'Seamless Universal Connectivity: Hyzync\'s Bionic Application Integrates Effortlessly with ECG Machines. Our platform ensures compatibility across various ECG devices, facilitating streamlined data collection and analysis. Healthcare professionals can easily access and interpret real-time cardiac data, enhancing diagnostic accuracy and patient care efficacy.',
    },
];

const Services = () => (
    <div id="services" className="bg-gray-100 py-12">
        <section data-aos="zoom-in-down">
            <div className="my-4 py-4">
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Specifications</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900'></div>
                </div>
                <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                    We are deeply committed to the growth and success of our clients.
                </h2>
            </div>
            <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {servicesData.map((service, index) => (
                        <div key={index} className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt={`service ${index + 1}`} className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={service.img} />
                                <h2 className="font-semibold my-4 text-2xl text-center">{service.title}</h2>
                                <p className="text-md font-medium">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/* Additional Sections can be added here */}
    </div>
);

export default Services;
