import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 bg-white dark:bg-gray-800 shadow flex items-center justify-between px-4 py-2">
      <Link to="/" className="font-bold text-xl">Secaluxe</Link>
      <nav className="space-x-4">
        <Link to="/">{t('nav.home')}</Link>
        <Link to="/products">{t('nav.products')}</Link>
        <Link to="/blog">{t('nav.blog')}</Link>
        <a href="#contact">{t('nav.contact')}</a>
      </nav>
      <div className="flex space-x-2 items-center">
        <LanguageToggle />
        <ThemeToggle />
        <button type="button" className="bg-blue-600 text-white px-3 py-1 rounded">
          {t('cta')}
        </button>
      </div>
    </header>
  );
}
