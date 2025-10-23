import { Link } from 'react-router-dom';
import { FileText, Shield, ArrowRight, Bot, Users, Sparkles, ExternalLink, Smile } from 'lucide-react';
import { useCurrentYear } from '../hooks/utils';
import { Home as HomeIcon }  from 'lucide-react';
import Header from '../components/Header';
export default function Home() {
  const discordInviteUrl = "https://discord.com/api/oauth2/authorize?";
  const discordServerUrl = "https://discord.gg/";
  const currentYear = useCurrentYear();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-purple-950 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="flex items-start justify-between mb-6 gap-4">
          <div className="flex-1">
            <Header />
          </div>
          <Link
            to="/"
            className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition-all flex-shrink-0"
            title="Back to Home"
          >
            <HomeIcon size={24} />
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-16 animate-fade-in">

          <div className="text-center lg:text-left flex-1">
            {/* <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full px-4 py-2 mb-6">
              <Sparkles size={16} className="text-indigo-300" />
              <span className="text-indigo-200 text-sm font-medium">New: Emoji Features</span>
            </div> */}
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Make A Fun<br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Discord Server!
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
              A very customizable multipurpose bot for generating emojis,<br />
              streaks, fun commands and many more...
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={discordInviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-500/50 hover:scale-105"
              >
                <Bot size={24} />
                Add To Discord
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href={discordServerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                <Users size={24} />
                Join Support Server
              </a>
            </div>
          </div>

          
          <div className="flex-shrink-0 mx-8 ">
      <div className="w-72 h-72 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-2xl shadow-indigo-500/50">
      <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center border-4 border-indigo-400/20 overflow-hidden">
        <img 
          src="/assets/spam-profile.png" 
          className="w-full h-full object-cover"
          alt="Spam-sama Profile"
        />
      </div>
    </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900/40 backdrop-blur border border-gray-700/50 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105">
            <div className="bg-indigo-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Smile size={28} className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Generating Emojis</h3>
            <p className="text-gray-400">
              Generate emojis for your server with popular templates
            </p>
          </div>

          <div className="bg-gray-900/40 backdrop-blur border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="bg-purple-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Shield size={28} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Advanced Security</h3>
            <p className="text-gray-400">
              Keep your server safe with advanced moderation and logging features.
            </p>
          </div>

          <div className="bg-gray-900/40 backdrop-blur border border-gray-700/50 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
            <div className="bg-pink-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Sparkles size={28} className="text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Easy Customization</h3>
            <p className="text-gray-400">
              Customize every aspect of the bot to fit your server's unique needs.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Legal Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/terms"
              className="group bg-gray-900/40 backdrop-blur border border-gray-700/50 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <FileText size={40} className="text-indigo-400" />
                <ArrowRight size={24} className="text-gray-400 group-hover:text-indigo-400 group-hover:translate-x-2 transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Terms of Service</h3>
              <p className="text-gray-400">
                Read our terms and conditions for using Spam-sama.1984 in your Discord server.
              </p>
            </Link>

            <Link
              to="/privacy"
              className="group bg-gray-900/40 backdrop-blur border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <Shield size={40} className="text-purple-400" />
                <ArrowRight size={24} className="text-gray-400 group-hover:text-purple-400 group-hover:translate-x-2 transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Privacy Policy</h3>
              <p className="text-gray-400">
                Learn how we collect, use, and protect your data when you use our bot.
              </p>
            </Link>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-400 text-sm">
          <p className="mb-2">© {currentYear} Spam-sama.1984. All rights reserved.</p>
          <p>Last updated: October 20, {currentYear} </p>
        </div>
      </div>
    </div>
  );
}