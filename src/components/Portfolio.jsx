import { ExternalLink, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: 'Riverside Coffee',
    tag: 'Cafe • E‑commerce',
    image:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Bloom Dental Studio',
    tag: 'Healthcare • Booking',
    image:
      'https://images.unsplash.com/photo-1588771930290-24a6fc36e3f2?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Peak Fitness Club',
    tag: 'Fitness • Membership',
    image:
      'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Featured work</h2>
            <p className="mt-3 text-gray-600 max-w-xl">A selection of websites we’ve crafted for local businesses across retail, healthcare, and services.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">
            Book a discovery call
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{p.title}</h3>
                  <p className="text-sm text-gray-600">{p.tag}</p>
                </div>
                <ExternalLink size={18} className="text-gray-400 group-hover:text-gray-700" />
              </div>
            </a>
          ))}
        </div>

        <div id="about" className="mt-14 grid items-center gap-8 rounded-2xl border border-black/10 bg-white p-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">A small team with big outcomes</h3>
            <p className="mt-3 text-gray-600">We partner closely with owners and marketing teams to design websites that are simple to manage and proven to convert. Every project includes a practical playbook for updates post‑launch.</p>
            <ul className="mt-4 grid gap-2 text-sm text-gray-700">
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18}/> Mobile‑first, accessible design</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18}/> Performance and SEO baked in</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18}/> Training and support included</li>
            </ul>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6">
            <div className="grid grid-cols-2 gap-4">
              <Stat label="Avg. PageSpeed" value="95+" />
              <Stat label="Projects Delivered" value="120+" />
              <Stat label="Client Satisfaction" value="4.9/5" />
              <Stat label="Avg. Timeline" value="3 weeks" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-black/10 bg-white p-4 text-center">
      <div className="text-2xl font-semibold text-gray-900">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}
