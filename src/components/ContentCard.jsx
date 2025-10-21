export default function ContentCard({ children }) {
  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 overflow-y-auto">
      {children}
    </div>
  );
}