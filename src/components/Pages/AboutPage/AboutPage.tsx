'use client';
import React from 'react'
import { HelloBeauty } from '@/components/HelloBeauty/HelloBeauty';
import { Process } from '@/components/Process/Process';
import { useMenuOpen } from '@/contexts/MenuContext';
import { MenuOpen } from '@/components/MenuOpen.tsx/MenuOpen';

export const AboutPage = () => {
  const {isMenuOpen} = useMenuOpen();
  return (
    <main>
      <HelloBeauty />
      <Process />
      {isMenuOpen && <MenuOpen />}
    </main>
  )
}
