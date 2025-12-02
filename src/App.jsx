import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header.jsx';
import { Home } from './Main/Home.jsx';
import { Footer } from './Footer/Footer.jsx';
import { About } from './Header/About';
import { BrowseGames } from './Footer/BrowseGames';
import { Categories } from './Footer/Categories';
import { Contact } from './Footer/Contact';
import { ErrorComponent } from './Error/ErrorComponent.jsx';
import { GameDetails } from './Main/GameDetails.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles/app.css';

function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    const applyTheme = (dark) => {
      if (dark) {
        document.documentElement.classList.add('dark');
      }
      else {
        document.documentElement.classList.remove('dark');
      }
    };
    if (storedTheme) {
      applyTheme(storedTheme === 'dark');
    }
    else {
      applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      if (!storedTheme) {
        applyTheme(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/browse" element={<BrowseGames />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/game/:id" element={<GameDetails />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
