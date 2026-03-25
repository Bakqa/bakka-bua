import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider, SignInButton } from "@clerk/nextjs";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "BakkaBua |Home",
  description: "the Home of Products,services and entertainment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <main className="min-h-full flex flex-col">
        <Header />
        <SignInButton />
        {children}
        <Footer />
      </main>
    </ClerkProvider>
  );
}
