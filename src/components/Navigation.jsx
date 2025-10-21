import { FileText, Shield } from 'lucide-react';

export default function Navigation({ activePage, setActivePage }) {
  return (
    <div className="flex gap-4 mb-8">
      <button
        onClick={() => setActivePage('terms')}
        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all ${
          activePage === 'terms'
            ? 'bg-white text-purple-900 shadow-lg'
            : 'bg-purple-800/50 text-white hover:bg-purple-800/70'
        }`}
      >
        <FileText size={20} />
        Terms of Service
      </button>
      <button
        onClick={() => setActivePage('privacy')}
        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all ${
          activePage === 'privacy'
            ? 'bg-white text-purple-900 shadow-lg'
            : 'bg-purple-800/50 text-white hover:bg-purple-800/70'
        }`}
      >
        <Shield size={20} />
        Privacy Policy
      </button>
    </div>
  );
}