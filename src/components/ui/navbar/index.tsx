'use client';

import { sign } from 'crypto';
import { Navbar, Button } from 'flowbite-react';
import { signOut } from 'next-auth/react';
import { LogoutButton } from '@/app/auth';
export default function DefaultNavbar() {
  return (
    <Navbar fluid rounded className="fixed top-0 left-0 w-full z-50 bg-gray-300 py-4 px-8">
      {/* Your existing Navbar content here */}
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="flex self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          To-Do List
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <LogoutButton />
      </div>
      <Navbar.Collapse className='right-0'>
        {/* Your existing Navbar links here */}
        <Navbar.Link
          active
          href="/"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link
          href="/dashboard"
        >
          <p>
            Dashboard
          </p>
        </Navbar.Link>
        <Navbar.Link href="/project">
          Project
        </Navbar.Link>
        <Navbar.Link href="/notebook">
          Notebook
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}




