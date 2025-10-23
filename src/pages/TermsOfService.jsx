import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ContentCard from '../components/ContentCard';
import Footer from '../components/Footer';
import Section from '../components/Section';
import { useDocumentTitle } from '../hooks/utils';

export default function TermsOfService() {
  useDocumentTitle('Terms of Service - Spam-sama.1984');
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-stone-950 p-4 overflow-y-auto">
      <div className="w-full max-w-4xl mx-auto py-8">
        <div className="flex items-start justify-between mb-6 gap-4">
          <div className="flex-1">
            <Header />
          </div>
          <Link
            to="/"
            className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition-all flex-shrink-0"
            title="Back to Home"
          >
            <Home size={24} />
          </Link>
        </div>

        <Navigation />

        <ContentCard>
          <div className="prose max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Terms of Service</h2>
            
            <Section title="1. Acceptance of Terms">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                By inviting Spam-sama.1984 to your Discord server or using any of its features, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the bot.
              </p>
            </Section>

            <Section title="2. Description of Service">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Spam-sama.1984 is a Discord bot that provides various features and functionalities to enhance your Discord server experience. The bot is provided "as is" and may be modified, updated, or discontinued at any time without prior notice.
              </p>
            </Section>

            <Section title="3. User Conduct">
              <p className="text-gray-700 leading-relaxed mb-2 text-sm md:text-base">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm md:text-base">
                <li>Use the bot for any illegal or unauthorized purpose</li>
                <li>Attempt to disrupt, hack, or reverse engineer the bot</li>
                <li>Use the bot to spam, harass, or abuse other users</li>
                <li>Exploit bugs or vulnerabilities for personal gain</li>
                <li>Resell or redistribute the bot's services</li>
              </ul>
            </Section>

            <Section title="4. Limitations and Availability">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                We do not guarantee that the bot will be available at all times or that it will function without errors. The bot may experience downtime for maintenance, updates, or due to circumstances beyond our control.
              </p>
            </Section>

            <Section title="5. Disclaimer of Warranties">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Spam-sama.1984 is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the bot will meet your requirements or that its operation will be uninterrupted or error-free.
              </p>
            </Section>

            <Section title="6. Limitation of Liability">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                In no event shall the bot developers be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the bot.
              </p>
            </Section>

            <Section title="7. Termination">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                We reserve the right to terminate or suspend access to the bot for any user or server at any time, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
              </p>
            </Section>

            <Section title="8. Changes to Terms">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                We reserve the right to modify these Terms of Service at any time. Continued use of the bot after any such changes constitutes your acceptance of the new terms.
              </p>
            </Section>

            <Section title="9. Contact">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                If you have any questions about these Terms of Service, please contact us through our support server or via Discord.
              </p>
            </Section>
          </div>
        </ContentCard>

        <Footer />
      </div>
    </div>
  );
}