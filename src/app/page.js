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
import Slider from '@/Components/Slider';
import MeetAhed from '@/Components/MeetAhed';
import SelfImprovement from '@/Components/SelfImprovement';
import Wondered from '@/Components/Wondered';
import EQBeat from '@/Components/EQBeat';


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
      <Carousel />
      <EQBeat />
      <Slider />
      <MeetAhed />
      <SelfImprovement />
      <EQBeat />
      <Wondered />
      <Beforestart />
      <WorkWith />

      <Vacancies />
      <Footer />
    </React.Fragment>

  );
}
