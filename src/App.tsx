/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Film, 
  MapPin, 
  Phone, 
  ChevronRight, 
  Star, 
  Flame, 
  Clock,
  Navigation
} from 'lucide-react';
import { MENU_ITEMS } from './constants';

export default function App() {
  const categories = ['Blockbusters', 'Main Cast', 'Action Stars'];

  return (
    <div className="min-h-screen grainy-overlay selection:bg-neon-yellow selection:text-movie-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-movie-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Film className="text-retro-red w-8 h-8" />
            <span className="font-display text-2xl tracking-tighter">RETRO SUBS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-display text-sm tracking-widest opacity-70">
            <a href="#menu" className="hover:text-retro-red transition-colors">THE MENU</a>
            <a href="#location" className="hover:text-retro-red transition-colors">LOCATION</a>
            <a href="#about" className="hover:text-retro-red transition-colors">OUR STORY</a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="tel:8603250772"
              className="bg-retro-red text-white px-4 py-2 font-display text-xs tracking-widest hover:scale-105 transition-transform flex items-center gap-2"
            >
              <Phone className="w-3 h-3" /> CALL TO ORDER
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/deli/1920/1080?blur=4" 
            className="w-full h-full object-cover opacity-30"
            alt="Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-movie-black via-transparent to-movie-black/50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-retro-red text-sm tracking-[0.3em] uppercase mb-4 block">Now Showing on Beaver St.</span>
            <h1 className="text-6xl md:text-9xl mb-6 leading-none">
              LEGENDARY <br />
              <span className="text-neon-yellow">FLAVORS</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10 font-light">
              Experience the blockbuster taste of New Britain's finest subs. 
              Hand-crafted, movie-themed, and always fresh.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#menu" 
                className="bg-retro-red hover:bg-retro-red/90 text-white font-display px-10 py-4 rounded-none transition-all hover:scale-105 flex items-center gap-2 group"
              >
                VIEW MENU <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://maps.google.com/?q=269+Beaver+St,+New+Britain,+CT"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-neon-yellow hover:text-neon-yellow font-display px-10 py-4 rounded-none transition-all flex items-center gap-2"
              >
                GET DIRECTIONS <Navigation className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 left-10 hidden lg:block">
          <div className="flex gap-12 font-mono text-xs tracking-widest opacity-50">
            <div className="flex flex-col gap-1">
              <span>EST.</span>
              <span className="text-white font-bold">2024</span>
            </div>
            <div className="flex flex-col gap-1">
              <span>LOCATION</span>
              <span className="text-white font-bold">NEW BRITAIN, CT</span>
            </div>
            <div className="flex flex-col gap-1">
              <span>RATING</span>
              <span className="text-white font-bold">★★★★★</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl mb-4">THE FEATURE FILM</h2>
          <p className="text-cream/50 font-mono tracking-[0.5em] uppercase text-sm">Legendary flavors on Beaver St.</p>
        </div>

        <div className="space-y-32">
          {categories.map((category) => (
            <div key={category} className="space-y-12">
              <div className="flex items-center gap-6">
                <h3 className="text-4xl md:text-5xl text-neon-yellow whitespace-nowrap">{category}</h3>
                <div className="h-px w-full bg-white/10" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                {MENU_ITEMS.filter(item => item.category === category).map((item) => (
                  <div key={item.id} className="group">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col gap-2">
                        {item.badge && (
                          <span className="bg-neon-yellow text-movie-black font-display text-[8px] px-2 py-0.5 tracking-widest w-fit">
                            {item.badge}
                          </span>
                        )}
                        <h4 className="text-3xl group-hover:text-retro-red transition-colors flex items-center gap-2">
                          {item.name}
                          {item.isHot && <Flame className="w-5 h-5 text-retro-red" />}
                        </h4>
                      </div>
                      <span className="font-mono text-neon-yellow text-xl">${item.price}</span>
                    </div>
                    <p className="text-cream/60 text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Build Your Own Section */}
        <div className="mt-32 p-12 border border-white/10 bg-white/5 text-center">
          <h3 className="text-4xl mb-6">THE DIRECTOR'S CUT</h3>
          <p className="text-cream/60 max-w-2xl mx-auto mb-12 font-light">
            Customize any sub with our supporting roles. Choose your size, cheese, fillers, and sauces at the counter.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div>
              <h5 className="font-display text-retro-red tracking-widest mb-4 text-xs">CHEESES</h5>
              <p className="text-xs font-mono opacity-50 leading-loose uppercase tracking-widest">
                Provolone • American • Swiss • Mozzarella
              </p>
            </div>
            <div>
              <h5 className="font-display text-retro-red tracking-widest mb-4 text-xs">FILLERS</h5>
              <p className="text-xs font-mono opacity-50 leading-loose uppercase tracking-widest">
                Lettuce • Tomato • Dill Pickles • Onions • Banana Peppers • Jalapenos
              </p>
            </div>
            <div>
              <h5 className="font-display text-retro-red tracking-widest mb-4 text-xs">SAUCES</h5>
              <p className="text-xs font-mono opacity-50 leading-loose uppercase tracking-widest">
                Mayo • Spicy Mustard • BBQ • Oil & Vinegar • Chipotle Mayo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Location */}
      <footer id="location" className="bg-white/5 border-t border-white/10 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Film className="text-retro-red w-8 h-8" />
              <span className="font-display text-2xl tracking-tighter">RETRO SUBS</span>
            </div>
            <p className="text-cream/50 font-light text-sm leading-relaxed mb-8">
              Legendary flavors on Beaver St. We bring the magic of cinema to your lunch break. 
              Fresh ingredients, bold recipes, and a passion for the craft.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-retro-red transition-colors cursor-pointer text-white/30 hover:text-white">
                <Star className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-retro-red transition-colors cursor-pointer text-white/30 hover:text-white">
                <Star className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-retro-red transition-colors cursor-pointer text-white/30 hover:text-white">
                <Star className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl mb-8 tracking-widest">SHOWTIMES</h4>
            <div className="space-y-4 font-mono text-xs tracking-widest text-cream/60">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>MON - FRI</span>
                <span className="text-white">10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>SATURDAY</span>
                <span className="text-white">11:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>SUNDAY</span>
                <span className="text-white">11:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl mb-8 tracking-widest">THE BOX OFFICE</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-retro-red w-5 h-5 mt-1" />
                <div>
                  <p className="text-sm font-bold">269 Beaver St.</p>
                  <p className="text-xs text-cream/50">New Britain, CT 06051</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-retro-red w-5 h-5 mt-1" />
                <div>
                  <p className="text-sm font-bold">(860) 325-0772</p>
                  <p className="text-xs text-cream/50">Call for pickup orders</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-retro-red w-5 h-5 mt-1" />
                <div>
                  <p className="text-sm font-bold">Average Wait</p>
                  <p className="text-xs text-cream/50">10-15 Minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] tracking-[0.3em] opacity-30 uppercase">
          <p>© 2024 RETRO SUBS NEW BRITAIN. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS</a>
            <a href="#" className="hover:text-white transition-colors">ACCESSIBILITY</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
