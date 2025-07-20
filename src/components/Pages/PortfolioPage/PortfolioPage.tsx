'use client';
import React from 'react';
import { GetInTouch } from '@/components/GetInTouch/GetInTouch';
import { EveryBrideDeserves } from '@/components/EveryBrideDeserves/EveryBrideDeserves';

export const PortfolioPage = () => {
  return (
    <main>
      <EveryBrideDeserves />
      <GetInTouch />
    </main>
  );
};
