import Section from './Section';

export default function TermsOfService() {
  return (
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h2>
      
      <Section title="1. Acceptance of Terms">
        <p className="text-gray-700 leading-relaxed">
          By inviting Spam-sama.1984 to your Discord server or using any of its features, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the bot.
        </p>
      </Section>

      <Section title="2. Description of Service">
        <p className="text-gray-700 leading-relaxed">
          Spam-sama.1984 is a Discord bot that provides various features and functionalities to enhance your Discord server experience. The bot is provided "as is" and may be modified, updated, or discontinued at any time without prior notice.
        </p>
      </Section>

      <Section title="3. User Conduct">
        <p className="text-gray-700 leading-relaxed mb-2">You agree not to:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
          <li>Use the bot for any illegal or unauthorized purpose</li>
          <li>Attempt to disrupt, hack, or reverse engineer the bot</li>
          <li>Use the bot to spam, harass, or abuse other users</li>
          <li>Exploit bugs or vulnerabilities for personal gain</li>
          <li>Resell or redistribute the bot's services</li>
        </ul>
      </Section>

      <Section title="4. Limitations and Availability">
        <p className="text-gray-700 leading-relaxed">
          We do not guarantee that the bot will be available at all times or that it will function without errors. The bot may experience downtime for maintenance, updates, or due to circumstances beyond our control.
        </p>
      </Section>

      <Section title="5. Disclaimer of Warranties">
        <p className="text-gray-700 leading-relaxed">
          Spam-sama.1984 is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the bot will meet your requirements or that its operation will be uninterrupted or error-free.
        </p>
      </Section>

      <Section title="6. Limitation of Liability">
        <p className="text-gray-700 leading-relaxed">
          In no event shall the bot developers be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the bot.
        </p>
      </Section>

      <Section title="7. Termination">
        <p className="text-gray-700 leading-relaxed">
          We reserve the right to terminate or suspend access to the bot for any user or server at any time, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
        </p>
      </Section>

      <Section title="8. Changes to Terms">
        <p className="text-gray-700 leading-relaxed">
          We reserve the right to modify these Terms of Service at any time. Continued use of the bot after any such changes constitutes your acceptance of the new terms.
        </p>
      </Section>

      <Section title="9. Contact">
        <p className="text-gray-700 leading-relaxed">
          If you have any questions about these Terms of Service, please contact us through our support server or via Discord.
        </p>
      </Section>
    </div>
  );
}