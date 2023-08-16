'use client';

import { Button, Navbar} from 'flowbite-react';
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
       <Button><LogoutButton /></Button>
       

      </div>
      <Navbar.Collapse className='right-0'>
        {/* Your existing Navbar links here */}
        <Navbar.Link
          active
          href="/"
        >
          <div>
            Home
          </div>
        </Navbar.Link>
        <Navbar.Link
          href="/dashboard"
        >
          <div>
            Dashboard
          </div>
        </Navbar.Link>
        <Navbar.Link href="/project">
          ToDo
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}




