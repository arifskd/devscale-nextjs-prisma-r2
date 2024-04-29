import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Template Next.js, Prisma, and Cloudflare R2 | Devscale ID",
  description:
    "Template Project Next.js, Prisma, and Cloudflare R2 for Devscale ID",
  publishedTime: "29-04-2024",
  authors: ["Devscale ID Student"],
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
