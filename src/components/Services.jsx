import { Palette, Code2, Smartphone, Search } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand & Web Design',
    desc: 'Clean, modern interfaces tailored to your brand and audience.'
  },
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Fast, responsive websites built with best practices for performance.'
  },
  {
    icon: Smartphone,
    title: 'E‑commerce & Booking',
    desc: 'Sell products or take appointments with smooth, mobile-first flows.'
  },
  {
    icon: Search,
    title: 'SEO & Analytics',
    desc: 'Get found locally and understand what drives your growth.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 -z-[0] bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">What we do</h2>
          <p className="mt-3 text-gray-600">End‑to‑end web design services to elevate your local business.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <p className="mt-3 text-xs text-gray-500">2–4 week average turnaround</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
