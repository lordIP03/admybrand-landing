export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#3a0ca3] to-[#7209b7] text-white py-28 text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Fuel Your Campaigns with <span className="text-yellow-400">AI Superpowers</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          ADmyBRAND AI Suite delivers smart insights, automation, and performance tools to scale your marketing effortlessly.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:brightness-110 transition">
            Get Started
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
}