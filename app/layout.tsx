import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "./_shared/constants/site";
import { spoqaHanSans } from "@/assets/fonts";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "형지",
    template: "%s | 형지",
  },
  description: "Hyungji Blog 🐈",
  verification: {
    google: "tG7FHMfv6ogz5e838LeM6QwEBZtiVFHQXaM1WoVnUqw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spoqaHanSans.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-[70ch] mx-auto w-full space-y-6">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
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
            className="text-gray-200 dark:text-gray-500 hover:text-gray-400 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
      <small className="text-gray-200 dark:text-gray-500 text-xs">
        Emoji graphics by
        <Link
          href="https://twemoji.twitter.com/license"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 dark:text-gray-500 hover:text-gray-400 transition-colors duration-200"
        >
          Twemoji
        </Link>
        , licensed under
        <Link
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
        >
          (CC-BY 4.0)
        </Link>
        .
      </small>
    </footer>
  );
}
