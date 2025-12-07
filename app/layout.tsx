// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Muhammad Arief Syazry Suid – Backend Software Developer",
  description:
    "Portfolio of Muhammad Arief Syazry Suid, a backend software developer working with Laravel, NestJS, FastAPI, AWS and Stripe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#FDF3E3] text-[#2F221B] antialiased dark:bg-[#0B0908] dark:text-[#F9F5EC]`}
      >
        {children}
      </body>
    </html>
  );
}
