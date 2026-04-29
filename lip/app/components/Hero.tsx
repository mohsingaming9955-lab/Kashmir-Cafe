export default function Hero() {
  return (
    <section className="px-6 py-20 text-center bg-white border-b border-orange-100">
      <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Grow Your Revenue</span>
      <h1 className="mt-4 text-4xl font-extrabold md:text-6xl text-stone-800">
        We Build High-Converting Websites for <span className="text-orange-600">Cafés & Restaurants</span>
      </h1>
      <p className="mt-6 text-lg text-stone-600 max-w-2xl mx-auto">
        Stop losing customers to competitors. Get a professional site with WhatsApp ordering and Google SEO to double your bookings.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#contact" className="px-8 py-4 bg-orange-600 text-white rounded-full font-bold shadow-lg hover:bg-orange-700 transition">
          Get Your Website
        </a>
        <button className="px-8 py-4 bg-white border-2 border-orange-600 text-orange-600 rounded-full font-bold hover:bg-orange-50 transition">
          View Demo
        </button>
      </div>
    </section>
  );
}
