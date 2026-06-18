import type { Metadata } from "next";
import { EB_Garamond, Libre_Franklin } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Susan Gallagher",
  description:
    "Creating digital products, services and workflows for a world being reshaped by AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${libreFranklin.variable}`}
    >
      <body>
        {children}
        <Script
          src="https://mcp.figma.com/mcp/html-to-design/capture.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
