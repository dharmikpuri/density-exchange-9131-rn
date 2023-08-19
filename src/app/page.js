"use client"
import React, { useEffect } from 'react';
import Navbar from '@/Components/Navbar';
import Vacancies from '@/Components/Vacancies';
import Beforestart from '@/Components/Beforestart';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '@/Components/Footer';
import WorkWith from '@/Components/WorkWith';
import Carousel from '@/Components/Carousel';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        // Your AOS configuration options...
        disable: false,
        // Other AOS options...
      });
    }
  }, []); 

  return (
    <React.Fragment>

      <Navbar />
      <Carousel/>
      <Beforestart />
      <Vacancies />
      <WorkWith/>
      <Footer/>
    </React.Fragment>

  );
}
