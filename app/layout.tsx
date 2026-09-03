import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Boat Care Pula | Boat Care & Maintenance in Istria',
  description: 'Regular boat checks, maintenance and concierge support in Pula, Veruda, Bunarina and Medulin. Reliable local care while you are away.',
  keywords: ['boat care Pula', 'boat maintenance Pula', 'boat check Istria', 'marina services Pula', 'boat concierge Croatia'],
  openGraph: { title: 'Boat Care Pula | Local care while you are away', description: 'Regular checks, clear reports and reliable local support in Pula and southern Istria.', type: 'website', locale: 'en_GB', images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Boat Care Pula, local care while you are away' }] },
  twitter: { card: 'summary_large_image', title: 'Boat Care Pula | Local care while you are away', description: 'Regular checks, clear reports and reliable local support in Pula and southern Istria.', images: ['/og.jpg'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
