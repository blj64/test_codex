import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const toggle = () => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  return (
    <button
      type="button"
      onClick={toggle}
      className="p-2 border rounded"
      aria-label="Toggle language"
    >
      {i18n.language.toUpperCase()}
    </button>
  );
}
