export default function Features() {
  const features = [
    { title: "AI Insights", description: "Make smart decisions with predictive analytics." },
    { title: "Workflow Automation", description: "Save time with marketing automation tools." },
    { title: "Team Collaboration", description: "Built-in features for smooth teamwork." },
    { title: "Real-Time Reports", description: "Live performance dashboards and summaries." },
    { title: "Fully Customizable", description: "Adapt the suite to your exact workflow." },
    { title: "Bank-Level Security", description: "Top-grade encryption and access controls." },
  ];
  return (
    <section className="py-20 bg-gradient-to-br from-[#240046] to-[#3f37c9]">
      <h2 className="text-4xl font-bold text-center text-white mb-14">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="bg-[#4c1d95] text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-200">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}