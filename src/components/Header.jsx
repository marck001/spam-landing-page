import { Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className="flex items-start justify-between mb-6 gap-4">
      <div className="flex-1">
        <div className="text-center md:text-left mb-6 md:mb-8">
          <div className="flex gap-2">
            <img className="w-16 h-12" src="/assets/void-orb.png" />
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Spam-sama.1984</h1>
          </div>
        </div>
      </div>
      <Link
        to="/"
        className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition-all flex-shrink-0"
        title="Back to Home"
      >
        <HomeIcon size={24} />
      </Link>
    </div>

  );
}