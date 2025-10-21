export default function ContentCard({ children }) {
  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8">
      {children}
    </div>
  );
}