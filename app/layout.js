import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "sonner";

const inter = Inter({subsets:["latin"]});

export const metadata = {
  title: "Torque Trade",
  description: "find your dream car now",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header/>

          <main className="min-h-screen">
            {children}
          </main>
          <Toaster richColors/>

          <footer className="bg-gray-500 py-12">
            <div className="container mx-auto px-4 text-center text-gray-900">
              <p>Made by SHIVAM</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
