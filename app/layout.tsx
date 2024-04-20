import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Debindo",
  description:
    "Exhibitors at DEBINDO will find all manner and dimensions of premises to suit every conceivable idea and concept. The possibilities for individual planning, combined with excellent service from our experienced officers, make DEBINDO the ideal partner for you to participate on our trade shows, conferences, congresses and special events.'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-openSans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
