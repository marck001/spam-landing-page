import { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ContentCard from './components/ContentCard';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function App() {
  const [activePage, setActivePage] = useState('terms');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Header />
        <Navigation activePage={activePage} setActivePage={setActivePage} />
        <ContentCard>
          {activePage === 'terms' ? <TermsOfService /> : <PrivacyPolicy />}
        </ContentCard>
        <Footer />
      </div>
    </div>
  );
}