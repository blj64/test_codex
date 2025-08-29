import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FeatureCard from '@/components/FeatureCard';
import ProductCard from '@/components/ProductCard';
import Testimonial from '@/components/Testimonial';
import FAQ from '@/components/FAQ';
import { contactSchema, ContactForm } from '@/lib/validation';

export default function Home() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = handleSubmit(() => {
    reset();
    alert(t('contact.success'));
  });

  const features = [
    t('features.durable'),
    t('features.space'),
    t('features.indoor'),
    t('features.outdoor'),
    t('features.rust'),
    t('features.eco'),
  ];

  const products = [
    { name: 'EcoDry', price: '49€', features: ['2m', 'Inox', 'Pliable'] },
    { name: 'MaxiDry', price: '79€', features: ['3m', 'Aluminium', 'Roulettes'] },
    { name: 'TravelDry', price: '39€', features: ['1.5m', 'Compact', 'Sac inclus'] },
  ];

  const testimonials = [
    { name: 'Alice', quote: 'Super pratique !' },
    { name: 'Bob', quote: 'Très solide.' },
    { name: 'Carla', quote: 'Design élégant.' },
  ];

  return (
    <div>
      <section className="text-center py-20 bg-gray-50 dark:bg-gray-800">
        <h1 className="text-4xl mb-4">{t('hero.title')}</h1>
        <p className="mb-6">{t('hero.subtitle')}</p>
        <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded">
          {t('cta')}
        </a>
      </section>

      <section className="grid md:grid-cols-3 gap-4 p-4">
        {features.map((f) => (
          <FeatureCard key={f} title={f}>
            {f}
          </FeatureCard>
        ))}
      </section>

      <section className="grid md:grid-cols-3 gap-4 p-4">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </section>

      <section className="grid md:grid-cols-3 gap-4 p-4">
        {testimonials.map((tst) => (
          <Testimonial key={tst.name} {...tst} />
        ))}
      </section>

      <FAQ />

      <section id="contact" className="p-4 max-w-md mx-auto">
        <h2 className="text-2xl mb-4">Contact</h2>
        <form onSubmit={onSubmit} className="space-y-2">
          <input
            {...register('name')}
            placeholder={t('contact.name')}
            className="w-full border p-2"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <input
            {...register('email')}
            placeholder={t('contact.email')}
            className="w-full border p-2"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          <textarea
            {...register('message')}
            placeholder={t('contact.message')}
            className="w-full border p-2"
          />
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            {t('contact.submit')}
          </button>
          {isSubmitSuccessful && <p className="text-green-600">{t('contact.success')}</p>}
        </form>
      </section>
    </div>
  );
}
