import { Menu } from '@headlessui/react';
import { FaGlobe } from 'react-icons/fa';
import { languages } from './NavigationItems';

export default function LanguageSelector({ currentLanguage, onLanguageChange }) {
  return (
    <div className="hidden sm:flex sm:items-center">
      <Menu as="div" className="relative">
        <Menu.Button className="flex items-center text-gray-700 hover:text-indigo-600">
          <FaGlobe className="mr-2" />
          <span>{currentLanguage}</span>
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {languages.map((language) => (
              <Menu.Item key={language}>
                {({ active }) => (
                  <button
                    onClick={() => onLanguageChange(language)}
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                  >
                    {language}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}