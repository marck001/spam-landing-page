import { Link, useLocation } from 'react-router-dom';
import { FileText, Shield } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const isTermsActive = location.pathname === '/terms';
  const isPrivacyActive = location.pathname === '/privacy';

  return (
    <div className="flex gap-4 mb-6 md:mb-8">
      <Link
        to="/terms"
        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all ${
          isTermsActive
            ? 'bg-white text-purple-900 shadow-lg'
            : 'bg-purple-800/50 text-white hover:bg-purple-800/70'
        }`}
      >
        <FileText size={20} />
        <span className="hidden sm:inline">Terms of Service</span>
        <span className="sm:hidden">Terms</span>
      </Link>
      <Link
        to="/privacy"
        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all ${
          isPrivacyActive
            ? 'bg-white text-purple-900 shadow-lg'
            : 'bg-purple-800/50 text-white hover:bg-purple-800/70'
        }`}
      >
        <Shield size={20} />
        <span className="hidden sm:inline">Privacy Policy</span>
        <span className="sm:hidden">Privacy</span>
      </Link>
    </div>
  );
}