import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

// The fonts from the Figma file: Font-family/Primary and Font-family/Secondary.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
});

// Poppins is not a variable font, so it needs a weight.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: "Pill og modal",
  description: "A pill that opens a modal – from Figma to React/Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
