import "./globals.css";

import { Silkscreen } from 'next/font/google';

const inter = Silkscreen({ subsets: ['latin'], weight: ['400', '400'] });

export const metadata = {
  title: "Pixelate Realm",
  description: "Roam the realm with your hero",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}