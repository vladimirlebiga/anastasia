'use client';
import React from 'react';
import { GetInTouch } from '@/components/GetInTouch/GetInTouch';
import { EveryBrideDeserves } from '@/components/EveryBrideDeserves/EveryBrideDeserves';
import { useMenuOpen } from '@/contexts/MenuContext';
import { MenuOpen } from '@/components/MenuOpen.tsx/MenuOpen';

export const PortfolioPage = () => {
  const {isMenuOpen} = useMenuOpen();
  return (
    <main>
      <EveryBrideDeserves />
      <GetInTouch />
      {isMenuOpen && <MenuOpen />}
    </main>
  );
};
