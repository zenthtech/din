import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// ✅ Correct way to define metadata in Next.js 13+ App Router
export const metadata = {
  title: "STARNEST Media",
  description: "Media company to generate good entertinment content",
  keywords:[
    "starnest",
    "StarNest",
    "Starnest",
    "Starnestmedia",
    "StarNest Media"
  ],
 
  icons: {
    icon: "/logo.png", // This ensures the favicon is properly loaded
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
