import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { TimelineProvider } from "@/context/TimelineContext";
export const metadata = {
  title: "KeenKeeper",
  description: "Keep Your Friendships Alive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body>

  <TimelineProvider>

    <Navbar />

    <Toaster position="top-right" />

    <main className="min-h-screen">
      {children}
    </main>

    <Footer />

  </TimelineProvider>

</body>
    </html>
  );
}