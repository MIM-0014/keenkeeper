import "./globals.css";

export const metadata = {
  title: "KeenKeeper",
  description: "Keep Your Friendships Alive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}