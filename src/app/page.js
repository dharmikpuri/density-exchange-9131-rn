"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/Components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';

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
    <ChakraProvider >
   
    <Navbar/>
   
  </ChakraProvider>
  );
}
