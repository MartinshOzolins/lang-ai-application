"use client";
import { UserButton, useUser } from "@clerk/nextjs";

export default function UserIcon() {
  const user = useUser();

  return (
    <div className="flex items-center gap-3">
      {user && <UserButton />}
      <p className="text-sm text-gray-600 hidden sm:block">
        Today&apos;s Limit: {user?.publicMetadata?.availableRequests || 0} / 10
      </p>
    </div>
  );
}
