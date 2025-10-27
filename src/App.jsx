import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import { Mail } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Let’s build something great</h3>
            <p className="mt-2 max-w-xl text-gray-600">Tell us about your business and goals. We’ll reply within one business day with next steps and a rough estimate.</p>
          </div>
          <div>
            <form className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input className="col-span-1 rounded-lg border border-black/10 bg-white px-3 py-3 text-sm outline-none focus:border-gray-400" placeholder="Your name" required />
              <input className="col-span-1 rounded-lg border border-black/10 bg-white px-3 py-3 text-sm outline-none focus:border-gray-400" placeholder="Email or phone" required />
              <input className="sm:col-span-2 rounded-lg border border-black/10 bg-white px-3 py-3 text-sm outline-none focus:border-gray-400" placeholder="Company / website (optional)" />
              <textarea className="sm:col-span-2 min-h-[120px] rounded-lg border border-black/10 bg-white px-3 py-3 text-sm outline-none focus:border-gray-400" placeholder="What do you need help with?" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-black sm:col-span-2">
                <Mail size={18}/> Send request
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-6 sm:flex-row">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} digitavin. All rights reserved.</p>
          <div className="text-sm text-gray-500">Made with care for local businesses.</div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}
