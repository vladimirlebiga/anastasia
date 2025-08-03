'use client';
import React from 'react';
import { BookBHCNow } from '@/components/BookBHCNow/BookBHCNow';
import { Form } from '@/components/Form/Form';
import { DearBrides } from '@/components/DearBrides/DearBrides';
import { useMenuOpen } from '@/contexts/MenuContext';
import { MenuOpen } from '@/components/MenuOpen.tsx/MenuOpen';

export const ContactPage = () => {
  const {isMenuOpen} = useMenuOpen();
  return (
    <main>
      <BookBHCNow />
      <DearBrides />
      <Form />
      {isMenuOpen && <MenuOpen />}
    </main>
  );
};
