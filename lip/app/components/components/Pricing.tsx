const plans = [
  { name: 'Basic', price: '₹1,999', features: ['Responsive Design', 'Digital Menu', 'WhatsApp Button', '1 Month Support'] },
  { name: 'Standard', price: '₹4,999', features: ['Google Maps SEO', 'Fast Loading', 'Domain Setup', 'Premium Theme'] },
  { name: 'Premium', price: '₹9,999', features: ['Online Booking', 'Full SEO Suite', 'Monthly Analytics', 'Priority Support'] },
];

export default function Pricing() {
  return (
    <section className="py-20 px-6 bg-stone-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Investment Plans</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.name} className="p-8 border border-stone-700 rounded-2xl hover:border-orange-500 transition">
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-4xl font-black my-4 text-orange-500">{plan.price}</p>
            <ul className="space-y-3 mb-8 text-stone-400">
              {plan.features.map(f => <li key={f}>✓ {f}</li>)}
            </ul>
            <button className="w-full py-3 bg-orange-600 rounded-lg font-bold">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}
