import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { FaMapMarkerAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import contactImage1 from "../../assets/images/twopiece/twopiece18.jpeg";
// import contactImage2 from "../../assets/images/twopiece/twopiece2.jpeg";
// import contactImage3 from "../../assets/images/twopiece/twopiece1.jpeg";

// Swiper.use([Navigation]);

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your Name");
    }
    if (!email) {
      setErrEmail("Enter your Email");
    } else {
      if (!EmailValidation(email)) {
        setErrEmail("Enter a Valid Email");
      }
    }
    if (!messages) {
      setErrMessages("Enter your Messages");
    }
    if (clientName && email && EmailValidation(email) && messages) {
      setSuccessMsg(
        `Thank you dear ${clientName}, Your messages has been received successfully. Futher details will sent to you by your email at ${email}.`
      );
    }
  };

  return (
    <div className="pl-50px max-w-container mx-auto px-4">
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {successMsg ? (
            <p className="pb-20 w-96 font-medium text-green-500">
              {successMsg}
            </p>
          ) : (
            <form className="pb-20">
              <h1 className="font-titleFont font-semibold text-3xl mb-6">
                Fill up a Form
              </h1>
              <div className="w-[500px] h-auto flex flex-col gap-6">
                <div>
                  <p className="text-base font-titleFont font-semibold px-2">
                    Name
                  </p>
                  <input
                    onChange={handleName}
                    value={clientName}
                    className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                    type="text"
                    placeholder="Enter your name here"
                  />
                  {errClientName && (
                    <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                      <span className="text-sm italic font-bold">!</span>
                      {errClientName}
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-base font-titleFont font-semibold px-2">
                    Email
                  </p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                    type="email"
                    placeholder="Enter your email here"
                  />
                  {errEmail && (
                    <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                      <span className="text-sm italic font-bold">!</span>
                      {errEmail}
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-base font-titleFont font-semibold px-2">
                    Messages
                  </p>
                  <textarea
                    onChange={handleMessages}
                    value={messages}
                    cols="30"
                    rows="3"
                    className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                    placeholder="Enter your message here"
                  ></textarea>
                  {errMessages && (
                    <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                      <span className="text-sm italic font-bold">!</span>
                      {errMessages}
                    </p>
                  )}
                </div>
                <button
                  onClick={handlePost}
                  className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
                >
                  Post
                </button>
              </div>
            </form>
          )}
        </div>
        <div>
          <h2 className="font-titleFont font-semibold text-2xl mb-4">
            Our Store Locations
          </h2>
          {/* <div className="mb-8">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src={contactImage1}
                  alt="Contact Image 1"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={contactImage2}
                  alt="Contact Image 2"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={contactImage3}
                  alt="Contact Image 3"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div> */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-titleFont font-semibold text-xl mb-4">
              CIS Countries
            </h3>
            <ul className="list-disc list-inside">
              <li>
                <FaMapMarkerAlt className="inline-block mr-2" />
                Moscow, Russia
              </li>
              <li>
                <FaMapMarkerAlt className="inline-block mr-2" />
                Nur-Sultan, Kazakhstan
              </li>
              <li>
                <FaMapMarkerAlt className="inline-block mr-2" />
                Minsk, Belarus
              </li>
              <li>
                <FaMapMarkerAlt className="inline-block mr-2" />
                Bishkek, Kyrgyzstan
              </li>
              <li>
                <FaMapMarkerAlt className="inline-block mr-2" />
                Tashkent, Uzbekistan
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="font-titleFont font-semibold text-xl mb-4">
              Store Map
            </h3>
            <div className="mb-4 bg-gray-300 rounded-lg h-64 flex items-center justify-center">
              <iframe className="w-full h-64" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.353097711782!2d78.38331523082235!3d42.48404537006267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38865b5c92042535%3A0x78a9de24f2cc9c3b!2sIT-Academy%20Karakol!5e0!3m2!1sru!2skg!4v1716966386243!5m2!1sru!2skg" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
