import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Film, 
  MapPin, 
  Phone, 
  ChevronRight, 
  Star, 
  Flame, 
  Clock,
  Navigation,
  Zap
} from 'lucide-react';
import { MENU_ITEMS, CUSTOMIZER } from './constants';

export default function App() {
  const salads = MENU_ITEMS.filter(item => item.category === 'Salads');
  const wings = MENU_ITEMS.filter(item => item.category === 'Wings');
  const fries = MENU_ITEMS.filter(item => item.category === 'Fries');
  const coldSubs = MENU_ITEMS.filter(item => item.category === 'Cold Subs');
  const hotSubs = MENU_ITEMS.filter(item => item.category === 'Hot Subs');
  const specialFeatures = MENU_ITEMS.filter(item => item.category === 'Retro Special Features');

  return (
    <div className="min-h-screen grainy-overlay selection:bg-neon-yellow selection:text-movie-black bg-movie-black text-cream">
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
      </section>

      {/* Unified Menu Section Header */}
      <section id="menu" className="relative pt-24 pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-8xl mb-4 leading-none font-display tracking-tighter">
            THE <span className="text-neon-yellow">MENU</span>
          </h2>
          <div className="flex items-center justify-center gap-4 text-cream/40 font-mono text-[10px] tracking-[0.3em] uppercase">
            <MapPin className="w-3 h-3" /> 269 BEAVER ST, NEW BRITAIN
            <span className="h-1 w-1 rounded-full bg-retro-red" />
            <Phone className="w-3 h-3" /> (860) 325-0772
          </div>
        </motion.div>
      </section>

      {/* Unified Menu Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Subs & Specials */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Retro Special Features */}
            <div className="bg-white/5 border border-white/10 p-8">
              <h2 className="font-display text-3xl text-neon-yellow mb-8 border-b border-white/10 pb-4">RETRO SPECIAL FEATURES</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {specialFeatures.map(item => (
                  <div key={item.id} className="group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl group-hover:text-retro-red transition-colors">• {item.name}</h3>
                      <div className="text-right font-mono text-xs">
                        <span className="text-neon-yellow">6" ${item.price6}</span>
                        <span className="mx-2 text-white/20">/</span>
                        <span className="text-white">12" ${item.price12}</span>
                      </div>
                    </div>
                    <p className="text-cream/40 text-[10px] uppercase tracking-wider italic">({item.description})</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub Sections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Cold Subs */}
              <div className="space-y-6">
                <h2 className="font-display text-3xl text-neon-yellow border-b border-white/10 pb-4">COLD SUBS</h2>
                <ul className="space-y-4 font-mono text-[11px] tracking-tight">
                  {coldSubs.map(item => (
                    <li key={item.id} className="flex justify-between items-center group">
                      <span className="group-hover:text-retro-red transition-colors">• {item.name}</span>
                      <div className="flex gap-3 text-[10px]">
                        <span className="text-neon-yellow">6" ${item.price6}</span>
                        <span className="text-white">12" ${item.price12}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hot Subs */}
              <div className="space-y-6">
                <h2 className="font-display text-3xl text-neon-yellow border-b border-white/10 pb-4">HOT SUBS</h2>
                <ul className="space-y-4 font-mono text-[11px] tracking-tight mb-8">
                  {hotSubs.map(item => (
                    <li key={item.id} className="group-hover:text-retro-red transition-colors">• {item.name}</li>
                  ))}
                </ul>
                <div className="bg-retro-red/10 border border-retro-red/30 p-4 text-center">
                  <p className="font-display text-xl text-retro-red mb-1">ALL HOT SUBS</p>
                  <p className="font-mono text-xs tracking-widest">6" $10.95 / 12" $14.95</p>
                </div>
              </div>
            </div>

            {/* Customization Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
              <div>
                <h4 className="font-display text-sm text-neon-yellow mb-4 tracking-widest uppercase">FILLERS</h4>
                <ul className="font-mono text-[9px] text-cream/50 space-y-1 uppercase">
                  {CUSTOMIZER.fillers.map(f => <li key={f}>• {f}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-display text-sm text-neon-yellow mb-4 tracking-widest uppercase">SAUCES</h4>
                <ul className="font-mono text-[9px] text-cream/50 space-y-1 uppercase">
                  {CUSTOMIZER.sauces.map(s => <li key={s}>• {s}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-display text-sm text-neon-yellow mb-4 tracking-widest uppercase">SPICES</h4>
                <ul className="font-mono text-[9px] text-cream/50 space-y-1 uppercase">
                  {CUSTOMIZER.spices.map(s => <li key={s}>• {s}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-display text-sm text-neon-yellow mb-4 tracking-widest uppercase">CHEESES</h4>
                <ul className="font-mono text-[9px] text-cream/50 space-y-1 uppercase">
                  {CUSTOMIZER.cheeses.map(c => <li key={c}>• {c}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Bites */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Salads */}
            <div className="bg-white/5 border border-white/10 p-6">
              <h2 className="font-display text-2xl text-neon-yellow mb-6 border-b border-white/10 pb-2">SALADS</h2>
              <ul className="space-y-3 font-mono text-xs">
                {salads.map(item => (
                  <li key={item.id} className="flex justify-between group">
                    <span className="group-hover:text-retro-red transition-colors">• {item.name}</span>
                    <span className="text-neon-yellow">${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wings */}
            <div className="bg-white/5 border border-white/10 p-6">
              <h2 className="font-display text-2xl text-neon-yellow mb-6 border-b border-white/10 pb-2">WINGS</h2>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {['PLAIN', 'BUFFALO', 'BBQ', 'GARLIC PARM', 'SWEET CHILI'].map(flavor => (
                    <span key={flavor} className="text-[8px] font-mono bg-white/10 px-2 py-1 tracking-tighter">{flavor}</span>
                  ))}
                </div>
                <ul className="space-y-3 font-mono text-xs">
                  {wings.map(item => (
                    <li key={item.id} className="flex justify-between group">
                      <span className="group-hover:text-retro-red transition-colors">• {item.name}</span>
                      <span className="text-neon-yellow">${item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Fries & Extra */}
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-6">
                <h2 className="font-display text-2xl text-neon-yellow mb-6 border-b border-white/10 pb-2">FRIES</h2>
                <ul className="space-y-3 font-mono text-xs">
                  {fries.map(item => (
                    <li key={item.id} className="flex justify-between group">
                      <span className="group-hover:text-retro-red transition-colors">• {item.name}</span>
                      <span className="text-neon-yellow">${item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-retro-red text-white p-6 text-center font-display text-2xl tracking-widest">
                EXTRA MEAT ${CUSTOMIZER.extraMeat.toFixed(2)}
              </div>
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
