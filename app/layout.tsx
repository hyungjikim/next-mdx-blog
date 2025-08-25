import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kimhyungji.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "형지",
    template: "%s | 형지",
  },
  description: "Hyungji Blog 🐈",
};

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSans.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-[70ch] mx-auto w-full space-y-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Footer() {
  const links = [{ name: "github", url: "https://github.com/hyungjikim" }];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
