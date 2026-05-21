import { FaUserPlus } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="bg-[#244d3f] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Keep Your Friendships Alive
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          Track your connections, stay in touch, and build stronger relationships effortlessly.
        </p>

        <button className="inline-flex items-center gap-2 bg-green-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          <FaUserPlus />
          Add a Friend
        </button>

      </div>
    </section>
  );
}