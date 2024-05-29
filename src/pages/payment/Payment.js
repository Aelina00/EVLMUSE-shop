import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/pageProps/Breadcrumbs';
import countryCodes from './countryCodes';

const Payment = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    address: '',
    country: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});
  const mapRef = useRef(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы
    
    // Проверка валидации (можно убрать, если не нужно):
    // const errors = validateForm();
    // if (Object.keys(errors).length === 0) {
    //   // Валидация пройдена, можно отправлять данные
    // } else {
    //   setErrors(errors);
    //   return; // Выходим из функции, если валидация не прошла
    // }
  
    // Просто показываем уведомление
    alert('We will process your order after payment verification');
    setShowModal(false); // Закрываем модальное окно, если нужно
  };

  const validateForm = () => {
    const errors = {};

    // Валидация номера карты
    const cardNumber = formData.cardNumber.replace(/\s/g, '');
    if (!/^4\d{12}(\d{3})?$/.test(cardNumber)) {
      errors.cardNumber = 'Invalid Visa card number';
    } else if (cardNumber.slice(0, 4) !== '4444') {
      errors.cardNumber = 'Card number must start with 4444 for Visa';
    }

    // Валидация CVV
    if (!/^\d{3}$/.test(formData.cvv)) {
      errors.cvv = 'CVV must be a 3-digit number';
    }

    // Валидация страны
    if (!['Russia', 'Ukraine', 'Belarus', 'Kazakhstan', 'Uzbekistan', 'Kyrgyzstan', 'Tajikistan', 'Armenia', 'Azerbaijan', 'Moldova'].includes(formData.country)) {
      errors.country = 'Please select a CIS country';
    }

    // Валидация Expiry Date
    if (!/^\\d{2}\/\\d{2}$/.test(formData.expiryDate)) {
      errors.expiryDate = 'Expiry date must be in MM/YY format';
    }

    // Валидация других полей (если нужно)
    // ...

    return errors;
  };

  const handleMapClick = () => {
    setShowMap(true);
    // Здесь можно инициализировать карту Google Maps и получить местоположение
    // после выбора местоположения, обновляем значение formData.address
  };

  const handleLocationSelect = (location) => {
    setFormData({
      ...formData,
      address: location,
    });
    setShowMap(false);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment Gateway" />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)]">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Payment Gateway</h2>
          <p className="text-gray-600 mb-8 text-center">Please complete your payment to proceed with your order.</p>
          <div className="mb-6">
            <label htmlFor="cardNumber" className="block text-gray-700 font-semibold mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/(.{4})/g, '$1 ').trim();
              }}
            />
            {errors.cardNumber && <p className="text-red-500 mt-2">{errors.cardNumber}</p>}
          </div>
          <div className="flex mb-6">
            <div className="w-1/2 mr-2">
              <label htmlFor="expiryDate" className="block text-gray-700 font-semibold mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="MM/YY"
                maxLength={5}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9/]/g, '').replace(/^(\d{2})(\d{0,2})/, '$1/$2').slice(0, 5);
                }}
              />
              {errors.expiryDate && <p className="text-red-500 mt-2">{errors.expiryDate}</p>}
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="cvv" className="block text-gray-700 font-semibold mb-2">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="123"
                maxLength={3}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '');
                }}
              />
              {errors.cvv && <p className="text-red-500 mt-2">{errors.cvv}</p>}
            </div>
          </div>
          <button
            type="button"
            className="w-full text-black py-3 rounded-md hover:bg-green-700 transition-colors duration-300 font-semibold"
            onClick={() => setShowModal(true)}
            style={{backgroundColor: 'rgb(230, 225, 220) '}}
          >
            Pay Now
          </button>
        </div>
        <Link to="/" className="mt-8">
          <button className="bg-primeColor text-white py-3 px-8 rounded-md hover:bg-black transition-colors duration-300 font-semibold">
            Explore More
          </button>
        </Link>
      </div>

      {/* Модальное окно */}
      {showModal ? (
        <div className="fixed z-10 inset-0 overflow-y-auto" onClick={() => setShowModal(false)}> {/* Добавлено onClick для закрытия */}
        <div className="flex items-center justify-center min-h-screen" onClick={(e) => e.stopPropagation()}> {/*  onClick для предотвращения закрытия самого модального окна */}
          <div className="bg-white rounded-lg shadow-lg p-8" onClick={(e) => e.stopPropagation()}> {/*  onClick для предотвращения закрытия самого модального окна */}
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Additional Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 flex">
                  <div className="mr-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="surname" className="block text-gray-700 font-semibold mb-2">
                      Surname
                    </label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      value={formData.surname}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="country" className="block text-gray-700 font-semibold mb-2">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  >
                    <option value="">Select a country</option>
                    {['Russia', 'Ukraine', 'Belarus', 'Kazakhstan', 'Uzbekistan', 'Kyrgyzstan', 'Tajikistan', 'Armenia', 'Azerbaijan', 'Moldova'].map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  {errors.country && <p className="text-red-500 mt-2">{errors.country}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                    Address
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                    <button
                      type="button"
                      className="absolute top-0 right-0 mt-2 mr-3  text-black rounded-md px-3 py-2 hover:bg-700 transition-colors duration-300"
                      onClick={handleMapClick}
                      style={{backgroundColor: 'rgb(230, 225, 220) '}}
                    >
                      Map
                    </button>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone
                  </label>
                  <div className="flex">
                    <select
                      id="phoneCode"
                      name="phoneCode"
                      value={formData.phoneCode}
                      onChange={handleInputChange}
                      className="w-28 mr-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    >
                      <option value="">Code</option>
                      {countryCodes.map((code) => (
                        <option key={code.code} value={code.code}>
                          {code.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Phone number"
                      required
                      disabled={!formData.phoneCode}
                      onInput={(e) => {
                        if (e.target.value.startsWith('0')) {
                          e.target.value = e.target.value.slice(1);
                        }
                      }}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  style={{backgroundColor: 'rgb(230, 225, 220)'}}
                  className="w-full text-black py-3 rounded-md hover:bg-green-700 transition-colors duration-300 font-semibold"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
      {/* Окно с картой */}
      {showMap && (
        <div className="fixed z-20 inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold mb-4">Select Location</h2>
            <div ref={mapRef} style={{ height: '400px', width: '600px' }}>
            <iframe style={{ height: '400px', width: '600px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.353097711782!2d78.38331523082235!3d42.48404537006267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38865b5c92042535%3A0x78a9de24f2cc9c3b!2sIT-Academy%20Karakol!5e0!3m2!1sru!2skg!4v1716966386243!5m2!1sru!2skg" ></iframe>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                onClick={() => handleLocationSelect('Selected location')} // Временное местоположение
              >
                Select Location
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Payment;
