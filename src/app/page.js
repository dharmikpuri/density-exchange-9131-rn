"use client"
import React, { useEffect } from 'react';
import Navbar from '@/Components/Navbar';
import Vacancies from '@/Components/Vacancies';
import Beforestart from '@/Components/Beforestart';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '@/Components/Footer';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        // Your AOS configuration options...
        disable: false,
        // Other AOS options...
      });
    }
  }, []); // Empty dependency array ensures the effect runs once after component mount

  return (
    <React.Fragment>

      <Navbar />
      <Vacancies />
      <Beforestart />
      <Footer/>
    </React.Fragment>

  );
}
