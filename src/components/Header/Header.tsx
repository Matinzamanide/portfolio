// Navbar.jsx
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // اضافه کردن آیکن‌ها از react-icons

const navigation = [
  { name: 'خانه', href: '#home' },
  { name: 'مهارت‌ها', href: '#skills' },
  { name: 'درباره', href: '#about' },
  { name: 'نمونه کارها', href: '#projects' },
  { name: 'تماس', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-40 backdrop-blur-lg bg-[rgba(0,0,0,0.5)] bg-opacity-90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-blue-600">Matindev</span>
          </div>

          <div className="">
            <ul className='hidden md:flex space-x-8'>
            {navigation.map((item) => (
              
              <li className='relative after:absolute after:right-0 after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:bg-white/70 after:top-7'>
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md transition-all duration-200"
              >
                {item.name}
              </a>
              </li>
            ))}
            </ul>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="منو"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" /> 
              ) : (
                <FaBars className="h-6 w-6" /> 
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden transition-transform duration-300 h-screen `}
      >
        <div className="px-2 pt-2 pb-3 space-y-10 sm:px-3 text-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

    </nav>
  );
}