export default function Section({ title, children }) {
  return (
    <section className="mb-6">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      {children}
    </section>
  );
}