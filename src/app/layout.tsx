import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReactQueryClientProvider from '@/components/ReactQueryClientProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Navbar from '@/components/common/Navbar';
import Sidebar from '@/components/common/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'crm',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryClientProvider>
          <Navbar />
          <div className="grid grid-cols-12 gap-4 overflow-hidden w-full">
            <div className="col-span-2">
              <Sidebar />
            </div>
            <div className="col-span-10 pt-20 pl-8 overflow-hidden">{children}</div>
          </div>
          {/* <ReactQueryDevtools  initialIsOpen={false} /> */}
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
