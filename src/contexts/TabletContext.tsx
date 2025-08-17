'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface TabletContextType {
  isTablet: boolean;
  screenWidth: number;
  setIsTablet: (tablet: boolean) => void;
  setScreenWidth: (width: number) => void;
}

const TabletContext = createContext<TabletContextType>({
  isTablet: false,
  screenWidth: 0,
  setIsTablet: () => {},
  setScreenWidth: () => {},
});

export function TabletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTablet, setIsTablet] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 980px)');
    const handleResize = (e: MediaQueryList | MediaQueryListEvent) => {
      setIsTablet(e.matches);
      setScreenWidth(window.innerWidth);
    };
    handleResize(mediaQuery);
    mediaQuery.addEventListener('change', handleResize);

    // Initial screen width
    setScreenWidth(window.innerWidth);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <TabletContext.Provider
      value={{ isTablet, screenWidth, setIsTablet, setScreenWidth }}
    >
      {children}
    </TabletContext.Provider>
  );
}

export function useTablet() {
  return useContext(TabletContext);
}
