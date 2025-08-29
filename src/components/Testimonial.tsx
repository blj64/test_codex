type Props = {
  name: string;
  quote: string;
};

export default function Testimonial({ name, quote }: Props) {
  return (
    <div className="p-4 border rounded">
      <p className="italic">“{quote}”</p>
      <p className="mt-2 font-semibold">{name}</p>
    </div>
  );
}
