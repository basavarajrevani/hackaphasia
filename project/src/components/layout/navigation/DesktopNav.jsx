import { Link } from 'react-router-dom';
import { navigation } from './NavigationItems';

export default function DesktopNav() {
  return (
    <div className="hidden sm:flex sm:space-x-8">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}