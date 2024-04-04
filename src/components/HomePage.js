import React from 'react';
import NavBar1 from './NavBar1';
import HomeLogin from './HomeLogin';
import { Fragment, useRef } from 'react';


function HomePage() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <NavBar1/>
      <HomeLogin/>
      
      <section id="about" ref={aboutRef} className="bg-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">About Us</h2>
          Pharm World is committed to revolutionizing the pharmacy industry. We aim to deliver high-quality services and products at affordable prices to our customers. Our mission is to make healthcare accessible to everyone by providing cost-effective solutions without compromising on quality.
        
        </div>
      </section>

      
      <section id="contact" ref={contactRef} className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          email:kavinramasamy2003@gmail.com
        </div>
      </section>
    </div>
  );
}

export default HomePage;