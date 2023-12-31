import "styles/style.css";
import Header from "layout/Header/Header";
import Footer from "layout/Footer/Footer";

import { Inter, Sora } from "next/font/google";

const SoraFont = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={SoraFont.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
