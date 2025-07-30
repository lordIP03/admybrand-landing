export default function FAQ() {
  const faqs = [
    {
      q: "Is there a free trial?",
      a: "Yes! You can try the full suite for 14 days at no cost.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Absolutely. No contracts, cancel whenever you like.",
    },
    {
      q: "Is my data secure?",
      a: "We use enterprise-grade encryption and are GDPR-compliant.",
    },
  ];
  return (
    <section className="py-20 bg-[#0f0f1c] text-white max-w-3xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      {faqs.map((item, idx) => (
        <div key={idx} className="mb-6 border-b border-white/10 pb-4">
          <h3 className="text-xl font-semibold mb-2">{item.q}</h3>
          <p className="text-gray-300">{item.a}</p>
        </div>
      ))}
    </section>
  );
}