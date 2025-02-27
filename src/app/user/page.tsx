"use client";
import Sidebar from '@/components/user/layout/Sidebar';
import UserHeader from '@/components/user/layout/UserHeader';


export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar component */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-grow ml-56"> {/* Add `ml-56` to shift content */}
        {/* Header section */}
        <UserHeader />

        {/* Content section */}
        <main className="p-6">
          {/* Your main content goes here */}
        </main>
      </div>
    </div>
  );
}
