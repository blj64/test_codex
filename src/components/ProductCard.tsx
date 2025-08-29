import { useTranslation } from 'react-i18next';

type Props = {
  name: string;
  price: string;
  features: string[];
};

export default function ProductCard({ name, price, features }: Props) {
  const { t } = useTranslation();
  const handleClick = () => {
    // analytics placeholder
    console.log('analytics:add_to_cart', name);
  };
  return (
    <div className="border p-4 rounded">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-xl">{price}</p>
      <ul className="list-disc pl-4 mb-2">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <button
        type="button"
        onClick={handleClick}
        className="bg-blue-600 text-white px-3 py-1 rounded"
      >
        {t('cta')}
      </button>
    </div>
  );
}
