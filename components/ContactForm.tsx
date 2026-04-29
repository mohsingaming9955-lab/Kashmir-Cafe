'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    
    const { error } = await supabase.from('contacts').insert([{
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }]);

    setLoading(false);
    if (!error) setSent(true);
  }

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-orange-100">
        <h2 className="text-3xl font-bold mb-6 text-stone-800">Ready to Increase Sales?</h2>
        {sent ? (
          <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center">We'll contact you within 24 hours!</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" placeholder="Business Name" required className="w-full p-4 bg-stone-50 border rounded-xl outline-orange-500" />
            <input name="email" type="email" placeholder="Email Address" required className="w-full p-4 bg-stone-50 border rounded-xl outline-orange-500" />
            <textarea name="message" rows={4} placeholder="Tell us about your restaurant" className="w-full p-4 bg-stone-50 border rounded-xl outline-orange-500"></textarea>
            <button disabled={loading} className="w-full py-4 bg-orange-600 text-white font-bold rounded-xl">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
