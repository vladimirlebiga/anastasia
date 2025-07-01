import React from 'react'
import { WeddingMorning } from '@/components/WeddingMorning/WeddingMorning';
import { WhatYouCanExpect } from '@/components/WhatYouCanExpect/WhatYouCanExpect';
import { BridalPackages } from '@/components/BridalPackages/BridalPackages';
import { AdditionalServices } from '@/components/AdditionalServices/AdditionalServices';
import { HairstylingExperience } from '@/components/HairstylingExperience/HairstylingExperience';

export const ServicesPage = () => {
  return (
    <main>
        <WeddingMorning />
        <WhatYouCanExpect />
        <BridalPackages />
        <AdditionalServices />
        <HairstylingExperience />
    </main>
  )
}