import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Article {id}</h1>
      <p>Contenu statique de l'article.</p>
    </div>
  );
}
