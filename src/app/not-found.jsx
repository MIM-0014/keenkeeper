import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-8xl font-black text-[#244d3f] mb-4">
          404
        </h1>

        <h2 className="text-3xl font-bold mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-8 max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="bg-[#244d3f] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Go Back Home
        </Link>

      </div>

    </section>
  );
}