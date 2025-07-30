export default function Navbar() {
  return (
   <nav className="bg-[#240046] text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">ADmyBRAND</h1>
      <div className="space-x-4">
        <button className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition">
          Sign Up
        </button>
        <button className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition">
          Login
        </button>
      </div>
    </nav>
  );
}