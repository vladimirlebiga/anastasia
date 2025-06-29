import React from 'react'
import { WeddingMorning } from '@/components/WeddingMorning/WeddingMorning';
import { WhatYouCanExpect } from '@/components/WhatYouCanExpect/WhatYouCanExpect';
import { BridalPackages } from '@/components/BridalPackages/BridalPackages';
import { AdditionalServices } from '@/components/AdditionalServices/AdditionalServices';

export const ServicesPage = () => {
  return (
    <main>
        <WeddingMorning />
        <WhatYouCanExpect />
        <BridalPackages />
        <AdditionalServices />
    </main>
  )
}