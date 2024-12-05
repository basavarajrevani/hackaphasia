import { useState } from 'react';
import { Link } from 'react-router-dom';
import DesktopNav from './navigation/DesktopNav';
import MobileNav from './navigation/MobileNav';
import LanguageSelector from './navigation/LanguageSelector';

export default function Header() {
  const [currentLanguage, setCurrentLanguage] = useState('English');

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">EduAI</span>
            </Link>
          </div>

          <DesktopNav />
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
          />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}