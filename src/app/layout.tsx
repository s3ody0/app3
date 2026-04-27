import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Toaster } from "@/components/ui/sonner";
import MyProvider from "@/myProvider/MyProvider";
import CartProvider from '../context/cart.context'
import { ThemeProvider } from "next-themes";


export const metadata: Metadata = {
  title: "FreshCart - Your Online Grocery Store",
  description: "A fully featured e-commerce application built with Next.js",
  icons: {
    icon: [
      {
        url: '/images/freshcart-logo.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/images/favicon.png',
        type: 'image/png',
      },
    ],
    shortcut: '/images/freshcart-logo.svg',
    apple: '/images/freshcart-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`font-sans antialiased flex flex-col min-h-screen`}>

    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>


      <MyProvider>

        <CartProvider>

<Toaster duration={3000} position="top-center"/>
      <Navbar/>
        <main className="flex-1">
          {children}
        </main>
        <Footer/>

        </CartProvider>

      </MyProvider>
      </ThemeProvider>

      </body>
    </html>
  );
}
