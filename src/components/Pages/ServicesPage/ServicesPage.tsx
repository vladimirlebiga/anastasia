'use client';
import React from 'react'
import { WeddingMorning } from '@/components/WeddingMorning/WeddingMorning';
import { WhatYouCanExpect } from '@/components/WhatYouCanExpect/WhatYouCanExpect';
import { BridalPackages } from '@/components/BridalPackages/BridalPackages';
import { AdditionalServices } from '@/components/AdditionalServices/AdditionalServices';
import { HairstylingExperience } from '@/components/HairstylingExperience/HairstylingExperience';
import { Faqs } from '@/components/Faqs/Faqs';
import { useMenuOpen } from '@/contexts/MenuContext';
import { MenuOpen } from '@/components/MenuOpen.tsx/MenuOpen';

export const ServicesPage = () => {
  const {isMenuOpen} = useMenuOpen();
  return (
    <main>
        <WeddingMorning />
        <WhatYouCanExpect />
        <BridalPackages />
        <AdditionalServices />
        <HairstylingExperience />
        <Faqs />
        {isMenuOpen && <MenuOpen />}
    </main>
  )
}