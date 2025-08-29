import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();
  const items = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="my-8">
      <h2 className="text-2xl mb-4">{t('faq.title')}</h2>
      {items.map((item, idx) => (
        <div key={item.q} className="mb-2">
          <button
            type="button"
            className="w-full text-left p-2 border"
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            {item.q}
          </button>
          {open === idx && <p className="p-2 border-l border-r border-b">{item.a}</p>}
        </div>
      ))}
    </section>
  );
}
