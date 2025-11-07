import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BookCallModalProvider } from '@/contexts/BookCallModalContext';
import BookCallModal from '@/components/BookCallModal';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Bachata Team - We Build Web Experiences',
  description:
    'A creative digital agency helping startups and enterprises build exceptional web experiences that drive results and inspire users.',
  keywords: 'web development, ui/ux design, digital agency, startup, enterprise, web design',
  authors: [{ name: 'Bachata Team' }],
  openGraph: {
    title: 'Bachata Team - We Build Web Experiences',
    description:
      'A creative digital agency helping startups and enterprises build exceptional web experiences that drive results and inspire users.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bachata Team - We Build Web Experiences',
    description:
      'A creative digital agency helping startups and enterprises build exceptional web experiences that drive results and inspire users.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        <BookCallModalProvider>
          <Header />
          <main className="pt-16 lg:pt-20">{children}</main>
          <Footer />
          <BookCallModal />
        </BookCallModalProvider>
      </body>
    </html>
  );
}
