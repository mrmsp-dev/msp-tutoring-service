import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import Providers from '@/lib/Providers';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});
export const metadata: Metadata = {
  title: 'MSP Tutoring Service',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang='en'>
        <body className={rubik.className}>
          <body>{children}</body>
        </body>
      </html>
    </Providers>
  );
}
