"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function UserIcon() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    fetch("/chat/api/check-requests");
  }, []);

  return (
    <div className="flex items-center gap-3">
      {!isLoaded && (
        <div className="w-9 h-9 rounded-full bg-gray-300 animate-pulse"></div>
      )}
      {isLoaded && user && <UserButton />}
      <p className="text-sm text-gray-600 hidden sm:block">
        Today&apos;s Limit: {user?.publicMetadata?.availableRequests || 0} / 10
      </p>
    </div>
  );
}
