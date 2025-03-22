'use client';
import { LayoutDashboard, UsersRound } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuDropdown from '../MenuDropdown';
import Image from 'next/image';
export default function SidebarNavigation() {
  const pathname = usePathname();

  const activeNav = (url: string) => (pathname === url ? 'bg-white shadow-md text-primary ml-3 mr-5 rounded-xl' : '');

  return (
    <>
      <Link href="/" className={`${activeNav('/')} navtitle`}>
      <Image width={40} height={40} src="/images/dashboard.png" alt=''/>
        <h2 className='col-span-3'>Dashboard</h2>
      </Link>
      <Link href="/applicants" className={`${activeNav('/applicants')} navtitle`}>
       
        <Image width={40} height={40} src="/images/india.png" alt=''/>
        
        <h2 className='col-span-3'>India</h2>
      </Link>

      <MenuDropdown />

      <Link href="/australia" className={`${activeNav('/australia')} navtitle`}>
      <Image width={40} height={40} src="/images/australia.png" alt=''/>
        <h2 className='col-span-3'>Australia</h2>
      </Link>
      <Link href="/turkey" className={`${activeNav('/turkey')} navtitle`}>
      <Image width={40} height={40} src="/images/turkey.png" alt=''/>
        <h2 className='col-span-3'>Turkey</h2>
      </Link>
      <Link href="/thailand" className={`${activeNav('/thailand')} navtitle`}>
      <Image width={40} height={40} src="/images/thailand.png" alt=''/>
        <h2 className='col-span-3'>Thailand</h2>
      </Link>
      <Link href="/cambodia" className={`${activeNav('/cambodia')} navtitle`}>
      <Image width={40} height={40} src="/images/cambodia.png" alt=''/>
        <h2 className='col-span-3'>Cambodia</h2>
      </Link>
    </>
  );
}
