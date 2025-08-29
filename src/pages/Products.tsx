import ProductCard from '@/components/ProductCard';

const products = [
  { name: 'EcoDry', price: '49€', features: ['2m', 'Inox', 'Pliable'] },
  { name: 'MaxiDry', price: '79€', features: ['3m', 'Aluminium', 'Roulettes'] },
  { name: 'TravelDry', price: '39€', features: ['1.5m', 'Compact', 'Sac inclus'] },
];

export default function Products() {
  return (
    <div className="grid md:grid-cols-3 gap-4 p-4">
      {products.map((p) => (
        <ProductCard key={p.name} {...p} />
      ))}
    </div>
  );
}
