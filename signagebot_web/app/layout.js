import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_component/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SignageBot",
  description: "IO production development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
