'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';
import ThemeRegistry from './ThemeRegistry';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ResponsiveProvider } from '@/contexts/ResponsiveContext';
import { MenuProvider } from '@/contexts/MenuContext';
import { TabletProvider } from '@/contexts/TabletContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeRegistry>
      <ThemeProvider theme={theme}>
        <TabletProvider>
          <ResponsiveProvider>
            <MenuProvider>
              <LanguageProvider>{children}</LanguageProvider>
            </MenuProvider>
          </ResponsiveProvider>
        </TabletProvider>
      </ThemeProvider>
    </ThemeRegistry>
  );
}
