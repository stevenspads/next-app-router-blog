import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "Next Dev Blog";
const description =
  "A Next.js markdown blog for developers using the new App Router.";
export const metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL,
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "Next.js",
    "JavaScript",
    "TypeScript",
    "React",
    "TailwindCSS",
    "contentlayer",
    "App Router",
  ],
  authors: [
    {
      name: "stevenspads",
      url: "https://github.com/stevenspads",
    },
  ],
  creator: "stevenspads",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title,
    description,
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`],
    creator: "@stevenspads",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
