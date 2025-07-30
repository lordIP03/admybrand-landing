export default function Pricing() {
  const plans = [
    {
      title: "Starter",
      price: "$19/mo",
      features: ["Basic dashboard", "Email support"],
    },
    {
      title: "Pro",
      price: "$49/mo",
      features: ["Real-time analytics", "Automation tools", "Priority support"],
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: ["All features", "Dedicated manager", "Custom integrations"],
    },
  ];

  return (
    <section className="py-16 bg-[#13132a] text-white text-center">
      <h2 className="text-4xl font-bold mb-12">Pricing</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto px-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="flex-1 bg-gradient-to-br from-[#7209b7] to-[#3a0ca3] p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="text-gray-200 mb-6 space-y-2">
              {plan.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
            <button className="bg-white text-[#3a0ca3] font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
