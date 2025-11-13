import React from 'react';
import JiboiaIcon from './icons/JiboiaIcon';

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = e.currentTarget.elements.namedItem('email') as HTMLInputElement;
    if (emailInput && emailInput.value) {
      // In a real app, you would handle the subscription logic here.
      alert(`Merci! ${emailInput.value} has been added to our list. C'est super!`);
      emailInput.value = '';
    }
  };

  return (
    <footer className="bg-stone-800 text-stone-200 mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-center md:text-left">
          
          <div className="md:col-span-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <JiboiaIcon className="w-8 h-8 text-emerald-500" />
              <span className="font-serif text-2xl font-bold">Atelier Jiboia</span>
            </div>
            <p className="mt-2 text-sm text-stone-400">Le style, c'est nous. The style, it's us.</p>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-bold uppercase tracking-wider mb-3">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#/" className="hover:text-emerald-400 transition-colors text-sm">Home</a></li>
              <li><a href="#/shop" className="hover:text-emerald-400 transition-colors text-sm">Le Shop</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors text-sm cursor-not-allowed">Notre Histoire</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold uppercase tracking-wider mb-3">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition-colors text-sm cursor-not-allowed">Instagram</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors text-sm cursor-not-allowed">Facebook</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold uppercase tracking-wider mb-3">Join the Famille</h4>
            <p className="text-sm text-stone-400 mb-4">Get updates, new drops, and maybe some 'franglais' jokes.</p>
            <form className="flex w-full max-w-sm mx-auto md:mx-0" onSubmit={handleNewsletterSubmit}>
              <label htmlFor="email-newsletter" className="sr-only">Email address</label>
              <input
                id="email-newsletter"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-2 text-sm bg-stone-700 text-white border border-stone-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-stone-400"
              />
              <button
                type="submit"
                className="bg-emerald-600 text-white font-bold text-sm px-4 py-2 rounded-r-md hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-stone-800"
              >
                S'inscrire
              </button>
            </form>
          </div>

        </div>
        <div className="mt-12 border-t border-stone-700 pt-8 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Atelier Jiboia. All rights reserved. Fait avec ❤️ à Paris et Rio.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
