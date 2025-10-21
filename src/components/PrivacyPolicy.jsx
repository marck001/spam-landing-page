import Section from './Section';

export default function PrivacyPolicy() {
  return (
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
      
      <Section title="1. Information We Collect">
        <p className="text-gray-700 leading-relaxed mb-2">
          Spam-sama.1984 may collect and store the following types of information:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
          <li>Server IDs and basic server information</li>
          <li>User IDs (for command usage and features)</li>
          <li>Message content when necessary for bot functionality</li>
          <li>Command usage data and interaction logs</li>
          <li>Configuration settings set by server administrators</li>
        </ul>
      </Section>

      <Section title="2. How We Use Your Information">
        <p className="text-gray-700 leading-relaxed mb-2">
          The information we collect is used to:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
          <li>Provide and maintain bot functionality</li>
          <li>Improve and optimize bot performance</li>
          <li>Respond to user commands and requests</li>
          <li>Troubleshoot issues and provide support</li>
          <li>Prevent abuse and ensure compliance with our Terms of Service</li>
        </ul>
      </Section>

      <Section title="3. Data Storage and Security">
        <p className="text-gray-700 leading-relaxed">
          We store collected data securely and take reasonable measures to protect it from unauthorized access, alteration, or destruction. However, no method of electronic storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </Section>

      <Section title="4. Data Retention">
        <p className="text-gray-700 leading-relaxed">
          We retain collected data only for as long as necessary to provide bot services and fulfill the purposes outlined in this Privacy Policy. Server administrators can request data deletion by removing the bot from their server.
        </p>
      </Section>

      <Section title="5. Data Sharing">
        <p className="text-gray-700 leading-relaxed">
          We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
          <li>When required by law or legal process</li>
          <li>To protect our rights or the safety of users</li>
          <li>With service providers who assist in bot operations (under strict confidentiality agreements)</li>
        </ul>
      </Section>

      <Section title="6. Third-Party Services">
        <p className="text-gray-700 leading-relaxed">
          The bot operates on Discord's platform and is subject to Discord's Terms of Service and Privacy Policy. We encourage you to review Discord's policies as well.
        </p>
      </Section>

      <Section title="7. Your Rights">
        <p className="text-gray-700 leading-relaxed mb-2">You have the right to:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
          <li>Request access to your data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of data collection by removing the bot from your server</li>
        </ul>
      </Section>

      <Section title="8. Children's Privacy">
        <p className="text-gray-700 leading-relaxed">
          The bot is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete the information.
        </p>
      </Section>

      <Section title="9. Changes to Privacy Policy">
        <p className="text-gray-700 leading-relaxed">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of the bot after changes constitutes acceptance of the updated policy.
        </p>
      </Section>

      <Section title="10. Contact Information">
        <p className="text-gray-700 leading-relaxed">
          If you have questions or concerns about this Privacy Policy or our data practices, please contact us through our support server or via Discord.
        </p>
      </Section>
    </div>
  );
}