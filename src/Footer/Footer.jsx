import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord, FaYoutube, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export function Footer() {
  const [theme, setTheme] = useState('hidden');

  const handleSubscribe = (event) => {
    event.preventDefault(); // чтобы страница не перезагружалась
    setTheme('visible'); // показываем сообщение
  };

  return (
    <footer className="p-6 bg-white dark:bg-[#1c1b23] text-gray-900 dark:text-white border-t-4 border-orange-500 mb-10">
      <div className="grid grid-cols-4 gap-6 mb-6">

        <div>
          <h2 className="font-semibold text-lg mb-2">About Gaming Log</h2>
          <p className="text-sm text-gray-400">
            Your ultimate solution for discovering free-to-play games across all platforms.
            Find your next adventure in our comprehensive gaming catalog.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Quick Links</h2>
          <ul className="text-sm flex flex-col gap-1 text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/browse">Browse Games</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Stay Updated</h2>
          <p className="text-sm mb-2 text-gray-400">Subscribe to get updates on new games.</p>

          <form className="w-full max-w-xs" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 mb-2 rounded bg-gray-100 dark:bg-[#2b2c31] text-sm w-full"
            />
            <button
              type="submit"
              className="bg-orange-500 w-full hover:bg-orange-600 px-4 py-2 rounded text-white text-sm"
            >
              Subscribe
            </button>
            <p className={`text-green-500 ${theme}`}>Successfully subscribed</p>
          </form>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Connect With Us</h2>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-orange-500"><FaXTwitter /></a>
            <a href="#" className="hover:text-orange-500"><FaDiscord /></a>
            <a href="#" className="hover:text-orange-500"><FaYoutube /></a>
            <a href="#" className="hover:text-orange-500"><FaGithub /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-300 dark:border-gray-600 pt-4 flex flex-col md:flex-col items-center text-sm text-gray-600 dark:text-gray-400 gap-2">
        <p>© 2025 Gaming Log. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-orange-500">Private Policy</a>
          <a href="#" className="hover:text-orange-500">Terms of Service</a>
          <a href="#" className="hover:text-orange-500">Cookie Policy</a>
        </div>
      </div>

    </footer>
  );
}
