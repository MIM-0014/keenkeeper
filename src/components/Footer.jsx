import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-[#244d3f] text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* TOP SECTION (CENTERED) */}
        <div className="flex flex-col items-center text-center">

          {/* LOGO / BRAND */}
          <h2 className="text-2xl font-semibold"><Image src="/assets/logo-xl.png" alt="Logo" width={400} height={200} /></h2>

          {/* PARAGRAPH */}
          <p className="text-sm text-white/70 mt-3 max-w-md leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
<h5 className="text-lg font-bold mt-4">Social Links</h5>
          {/* LINKS */}
          <ul className="flex gap-6 mt-6 text-sm text-white/80">
            <li className="hover:text-white transition cursor-pointer">
            <Image src="/assets/facebook.png" alt="Facebook" width={40} height={40} />
            </li>
            <li className="hover:text-white transition cursor-pointer">
           <Image src="/assets/instagram.png" alt="Instagram" width={40} height={40} />
            </li>
            <li className="hover:text-white transition cursor-pointer">
        <Image src="/assets/twitter.png" alt="Twitter" width={40} height={40} />
            </li>
          </ul>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 my-8"></div>

        {/* BOTTOM (UNCHANGED AS YOU WANTED) */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <span className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Terms
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}