import { Link } from 'react-router-dom';

const posts = [
  { id: '1', title: 'Pourquoi choisir Secaluxe', excerpt: 'Nos atouts pour un séchage parfait.' },
  { id: '2', title: 'Entretenir son étendoir', excerpt: 'Quelques gestes simples.' },
  { id: '3', title: 'Sécher à l\'extérieur', excerpt: 'Profitez du soleil.' },
];

export default function Blog() {
  return (
    <div className="p-4 space-y-4">
      {posts.map((p) => (
        <div key={p.id} className="border p-4 rounded">
          <h3 className="text-xl">
            <Link to={`/blog/${p.id}`}>{p.title}</Link>
          </h3>
          <p>{p.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
