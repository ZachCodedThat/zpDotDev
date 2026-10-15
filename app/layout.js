import Providers from "./providers";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.zacharyp.dev"),
  title: {
    default: "Zachary Przybilski | Front End Web Developer",
    template: "%s | Zachary Przybilski",
  },
  description:
    "Personal portfolio, projects, and contact information for Zachary Przybilski.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "zacharyp.dev",
    url: "/",
    images: [
      {
        url: "https://res.cloudinary.com/dey85zjmf/image/upload/v1641918331/blog/SEO_image_2_wlxbdl.png",
        width: 800,
        height: 600,
        alt: "ZacharyP.dev logo",
      },
    ],
  },
  twitter: { card: "summary_large_image", creator: "@TweetZachBack" },
  icons: { icon: "/SignatureStatic.webp" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
