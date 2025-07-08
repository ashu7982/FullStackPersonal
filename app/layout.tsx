"use client";
import "./globals.css";
// import "../styles/globals.css";
import "./styles/custom-css.scss"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(()=> new QueryClient())
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
