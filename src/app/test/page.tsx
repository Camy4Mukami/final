"use client";

import { useEffect } from "react";

export default function TestPage() {
  useEffect(() => {
    console.log("Loaded API Key:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
  }, []);

  return (
    <div>
      <h1>Check the console for Firebase API Key</h1>
    </div>
  );
}
