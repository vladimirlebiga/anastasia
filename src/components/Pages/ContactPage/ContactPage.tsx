import React from 'react'
import { BookBHCNow } from '@/components/BookBHCNow/BookBHCNow';
import { Form } from '@/components/Form/Form';  
import { DearBrides } from '@/components/DearBrides/DearBrides';


export const ContactPage = () => {
  return (
    <main>
      <BookBHCNow />
      <DearBrides />
      <Form />
    </main>
  )
}
