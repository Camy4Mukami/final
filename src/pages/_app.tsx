// src/pages/_app.tsx (or app/layout.tsx for App Router)
import { AuthProvider } from "@/context/AuthContext";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}