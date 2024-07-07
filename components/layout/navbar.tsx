'use client';

import Link from 'next/link';
import { HomeIcon, UserCircleIcon, QuestionMarkCircleIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'Home',
    href: '/',
    icon: HomeIcon
  },
  // {
  //   name: 'WHITEPAPER',
  //   href: '/whitepaper',
  //   icon: BookOpenIcon,
  // },
  {
    name: 'PROFILE',
    href: '/profile',
    icon: UserCircleIcon,
  },
  // {
  //   name: 'FAQ',
  //   href: '/faq',
  //   icon: QuestionMarkCircleIcon,
  // },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full text-white text-2xl">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4 font-bold">
            {links.map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    'flex space-x-1 items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-6 py-4',
                    {
                      'bg-gray-900 text-white': pathname === link.href,
                    },
                  )}
                >
                  <LinkIcon className="size-8" />
                  <span>{link.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
