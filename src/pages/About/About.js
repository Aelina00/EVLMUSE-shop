import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import aboutImage1 from '../../assets/images/slider/Fashionista.jpg';
import aboutImage2 from '../../assets/images/slider/8f0ba30c-5be4-458e-bf7c-a45a2b1d7e58.jpg';
import aboutImage3 from '../../assets/images/slider/Massimo Dutti.jpg';

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    setPrevLocation(location.state.data);
    const timeout = setTimeout(() => {
      setShowCards(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          EVLMUSE - THE ULTIMATE DESTINATION FOR STYLE AND BEAUTY LOVERS
        </h1>
        <p className="text-gray-600">...</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start mb-10">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h6 className="text-lg font-semibold mb-4">Created by</h6>
          <p className="text-gray-600 mb-4">Aelina Rysbekovna</p>
          <h6 className="text-lg font-semibold mb-4">Links</h6>
          <div className="flex flex-wrap mb-4">
            <Link
              to="/home"
              className="text-blue-500 hover:text-blue-700 mr-4 mb-2"
            >
              Glamour
            </Link>
            <Link
              to="/Casual"
              className="text-blue-500 hover:text-blue-700 mb-2"
            >
              Casual
            </Link>
          </div>
          <h6 className="text-lg font-semibold mb-4">Follow us</h6>
          <div className="flex">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 mr-4"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 mr-4"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 mr-4"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        <div className="md:w-2/3">
          <h6 className="text-lg font-semibold mb-4">About</h6>
          <p className="text-gray-600 mb-8">
            At evlmuse, we believe that everyone is unique and deserves to express their individual style. On our website, you'll find a wide range of clothing, shoes, and accessories to suit every taste and style.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 ${
                showCards ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
            >
              <img
                src={aboutImage1}
                alt="About Image 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h6 className="text-lg font-semibold mb-2">Fashion Trends</h6>
                <p className="text-gray-600">
                  Discover the latest fashion trends and styles on our website.
                </p>
              </div>
            </div>
            <div
              className={`bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 delay-100 ${
                showCards ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
            >
              <img
                src={aboutImage2}
                alt="About Image 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h6 className="text-lg font-semibold mb-2">Quality Products</h6>
                <p className="text-gray-600">
                  We offer high-quality clothing, shoes, and accessories from trusted brands.
                </p>
              </div>
            </div>
            <div
              className={`bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 delay-200 ${
                showCards ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
            >
              <img
                src={aboutImage3}
                alt="About Image 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h6 className="text-lg font-semibold mb-2">Personalized Style</h6>
                <p className="text-gray-600">
                  Find the perfect pieces to express your unique style and personality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;