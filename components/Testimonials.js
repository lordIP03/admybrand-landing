export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarav S.",
      text: "Switching to ADmyBRAND AI Suite boosted our engagement by 42%. It’s intuitive, powerful, and beautiful.",
    },
    {
      name: "Sanya M.",
      text: "The real-time analytics and automation tools helped us scale faster than ever before.",
    },
  ];

  return (
    <section className="py-20 bg-[#1e1b4b] text-white text-center">
      <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto px-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-[#3a0ca3] to-[#4361ee] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex-1"
          >
            <p className="italic text-lg mb-4">“{t.text}”</p>
            <h4 className="font-semibold text-yellow-300">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}