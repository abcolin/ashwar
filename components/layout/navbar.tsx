export default function Navbar() {
  return (
    <nav className="w-full text-white text-2xl">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 font-medium" aria-current="page">HOME</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium">WHITEPAPER</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium">PROFILE</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium">FAQ</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
