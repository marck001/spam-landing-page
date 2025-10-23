import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ContentCard from '../components/ContentCard';
import Footer from '../components/Footer';
import Section from '../components/Section';
import { useDocumentTitle } from '../hooks/utils';

export default function PrivacyPolicy() {
  useDocumentTitle('Privacy Policy - Spam-sama.1984');
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
            
            <Section title="1. Information We Collect">
              <p className="text-gray-700 leading-relaxed mb-2 text-sm md:text-base">
                Spam-sama.1984 may collect and store the following types of information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm md:text-base">
                <li>Server IDs and basic server information</li>
                <li>User IDs (for command usage and features)</li>
                <li>Message content when necessary for bot functionality</li>
                <li>Command usage data and interaction logs</li>
                <li>Configuration settings set by server administrators</li>
              </ul>
            </Section>

            <Section title="2. How We Use Your Information">
              <p className="text-gray-700 leading-relaxed mb-2 text-sm md:text-base">
                The information we collect is used to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm md:text-base">
                <li>Provide and maintain bot functionality</li>
                <li>Respond to user commands and requests</li>
                <li>Troubleshoot issues and provide support</li>
                <li>Prevent abuse and ensure compliance with our Terms of Service</li>
              </ul>
            </Section>

            <Section title="3. Data Storage and Security">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                We store collected data securely and take reasonable measures to protect it from unauthorized access, alteration, or destruction. However, no method of electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </Section>

            <Section title="4. Data Retention">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                We retain collected data only for as long as necessary to provide bot services and fulfill the purposes outlined in this Privacy Policy. Server administrators can request data deletion by removing the bot from their server.
              </p>
            </Section>

            <Section title="5. Data Sharing">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm md:text-base">
                <li>When required by law or legal process</li>
                <li>To protect our rights or the safety of users</li>
                <li>With service providers who assist in bot operations (under strict confidentiality agreements)</li>
              </ul>
            </Section>

            <Section title="6. Third-Party Services">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                The bot operates on Discord's platform and is subject to Discord's Terms of Service and Privacy Policy. We encourage you to review Discord's policies as well.
              </p>
            </Section>

            <Section title="7. Your Rights">
              <p className="text-gray-700 leading-relaxed mb-2 text-sm md:text-base">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm md:text-base">
                <li>Request access to your data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of data collection by removing the bot from your server</li>
              </ul>
            </Section>

         

            <Section title="8. Changes to Privacy Policy">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of the bot after changes constitutes acceptance of the updated policy.
              </p>
            </Section>

            <Section title="9. Contact Information">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us through our support server or via Discord.
              </p>
            </Section>
          </div>
        </ContentCard>

        <Footer />
      </div>
    </div>
  );
}