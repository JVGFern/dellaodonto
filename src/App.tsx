import React from 'react';
import { PhoneIcon} from '@heroicons/react/24/outline';

import logo from './assets/perfil-01.png';
import backgroundImage from './assets/perfil-01.png';
import dentist from './/assets/dentist-image.png'

const App: React.FC = () => {
  const handleWhatsAppClick = (): void => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const phoneNumber = '5548999960692';
    const url = isMobile
      ? `https://api.whatsapp.com/send?phone=${phoneNumber}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url);
  };

  return (
    <div
    className="flex items-center justify-center min-h-screen"
    style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundPosition: 'center' }}
     >
      <div className="p-8 bg-white rounded-md shadow-lg max-w-lg">
        <div className="text-center mb-8">
          <img src={logo} alt="Logo" className="w-40 h-40 mx-auto rounded-full" />
          <h2 className="text-5xl font-bold mt-4 mb-8 text-green-800">Site em construção</h2>
          <img src={dentist} alt="Logo" className="w-30 h-10 mx-auto " />
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded flex items-center mx-auto"
          onClick={handleWhatsAppClick}
        >
          <PhoneIcon className="h-5 w-5 mr-2" />
          Contato pelo WhatsApp
        </button>
        <div className="mt-8">
          <iframe
            title="Mapa do consultório"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0191450552684!2d-49.00308162367514!3d-28.47897007574894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952143fdbd623ce3%3A0xa9194c6d4616da12!2sDella%20Odonto%20-%20Cl%C3%ADnica%20Odontol%C3%B3gica!5e0!3m2!1spt-BR!2sbr!4v1685154388808!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            className="w-full rounded"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-8">
          <li className="text-gray-600 text-xs mb-2 ml-3 flex items-center justify-center ">
            Av. Marcolino Martins Cabral, 2075 - Ed. Medical Center, Sala 501
            Centro, Vila Moema Tubarão SC, CEP 88.705-001
          </li>
        </div>
      </div>
    </div>
  );
};

export default App;
