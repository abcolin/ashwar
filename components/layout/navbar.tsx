import { HomeIcon, UserCircleIcon, QuestionMarkCircleIcon, BookOpenIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <nav className="w-full text-white text-2xl">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4 font-bold">
            <a
              href="#"
              className="flex space-x-1 items-center bg-gray-900 text-white rounded-md px-6 py-4"
              aria-current="page"
            >
              <HomeIcon className="size-8" />
              <span>HOME</span>
            </a>
            <a
              href="#"
              className="flex space-x-1 items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-6 py-4"
            >
              <BookOpenIcon className="size-8" />
              <span>WHITEPAPER</span>
            </a>
            <a
              href="#"
              className="flex space-x-1 items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-6 py-4"
            >
              <UserCircleIcon className="size-8" />
              <span>PROFILE</span>
            </a>
            <a
              href="#"
              className="flex space-x-1 items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-6 py-4"
            >
              <QuestionMarkCircleIcon className="size-8" />
              <span>FAQ</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
