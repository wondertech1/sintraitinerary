import { ArrowRight } from 'lucide-react';

const SCREENSHOTS: [string, string, string] = [
  '/images/itine/screen-home.png',
  '/images/itine/screen-itinerary.png',
  '/images/itine/screen-maps.png',
];

const LABELS = ['Destinations', 'Your Itinerary', 'Google Maps'];

export default function ItineShowcase() {
  const href = `https://itine.ai/go?dest=${encodeURIComponent('Sintra')}&utm_source=sintraitinerary&utm_medium=blog&utm_campaign=showcase_section`;

  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#f59e0b] font-semibold mb-3">
          Powered by ITINE
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Get this guide as a tappable itinerary
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-10 text-base">
          Day-by-day plan, audio tours, and one-tap Google Maps — completely free.
        </p>

        <div className="flex items-end justify-center gap-4 sm:gap-6 md:gap-8 mb-10">
          {[0, 1, 2].map((i) => {
            const isCenter = i === 1;
            return (
              <div key={i} className={isCenter
                ? 'w-[155px] sm:w-[190px] md:w-[220px] z-10'
                : 'w-[120px] sm:w-[150px] md:w-[170px] opacity-80 scale-[0.92]'
              }>
                <div className={`bg-gray-900 ${isCenter ? 'rounded-[24px] sm:rounded-[30px] p-2.5 sm:p-3 shadow-2xl' : 'rounded-[20px] sm:rounded-[26px] p-2 sm:p-2.5 shadow-xl'}`}>
                  <div className={`overflow-hidden ${isCenter ? 'rounded-[16px] sm:rounded-[22px]' : 'rounded-[14px] sm:rounded-[18px]'} aspect-[9/19] bg-white`}>
                    <img
                      src={SCREENSHOTS[i]}
                      alt={LABELS[i]}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <p className="mt-3 text-xs sm:text-sm font-medium text-gray-500">
                  {LABELS[i]}
                </p>
              </div>
            );
          })}
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#fbbf24] text-gray-900 font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm sm:text-base"
        >
          Plan My Trip
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
