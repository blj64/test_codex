type Props = {
  title: string;
  children: string;
};

export default function FeatureCard({ title, children }: Props) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p>{children}</p>
    </div>
  );
}
