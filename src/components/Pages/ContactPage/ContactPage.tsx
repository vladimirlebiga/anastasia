'use client';
import React, { useEffect } from 'react';
import { BookBHCNow } from '@/components/BookBHCNow/BookBHCNow';
import { Form } from '@/components/Form/Form';
import { DearBrides } from '@/components/DearBrides/DearBrides';


export const ContactPage = () => {
  const hash = window.location.hash;
  useEffect(() => {
   
 
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      console.log(element);
      if (element) {
        element.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }
  }, [hash]);
  return (
    <main>
      <BookBHCNow />
      <DearBrides />
      <Form />
    </main>
  );
};
