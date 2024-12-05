import { Menu } from '@headlessui/react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { navigation } from './NavigationItems';

export default function MobileNav() {
  return (
    <div className="sm:hidden flex items-center">
      <Menu as="div" className="relative">
        <Menu.Button className="text-gray-700 hover:text-indigo-600">
          <FaBars className="h-6 w-6" />
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {navigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <Link
                    to={item.href}
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } block px-4 py-2 text-sm text-gray-700`}
                  >
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}