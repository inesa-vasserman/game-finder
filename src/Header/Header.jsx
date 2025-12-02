import { Link } from 'react-router-dom';
import logoLight from '../assets/apple-touch-icon.png';
import logoDark from '../assets/gaming-log.svg';
import '../styles/header.css';

export function Header() {
  return (
    <nav className="p-4 flex items-center justify-between bg-white text-gray-900 dark:bg-[#1c1b23] dark:text-white">
      <Link to="/">
        {/* Логотип для светлой темы */}
        <img
          src={logoLight}
          className="block dark:hidden h-12 object-contain rounded-sm"
          alt="Gaming log Light"
        />
        {/* Логотип для тёмной темы */}
        <img
          src={logoDark}
          className="hidden dark:block h-12 object-contain rounded-sm"
          alt="Gaming log Dark"
        />
      </Link>

      <h4 className="text-sm md:text-base">
        Bored? Find something to play for free!
      </h4>

      <div className="flex gap-4">
        <Link to="/" className="hover:text-orange-500">Home</Link>
        <Link to="/about" className="hover:text-orange-500">About</Link>
      </div>
    </nav>
  );
}
