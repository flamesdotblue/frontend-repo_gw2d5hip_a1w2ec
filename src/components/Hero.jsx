import Spline from '@splinetool/react-spline';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
              <Star size={14} className="text-amber-500" /> Award-winning local web design
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              We design and build standout websites for local businesses
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Digitavin crafts modern, high-performing websites that turn visitors into customers.
              From strategy and branding to development and SEO, we help your business grow online.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-black transition-colors"
              >
                Get a free proposal <ArrowRight size={18} />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                See our work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
