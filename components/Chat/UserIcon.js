"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useAvailableRequestsContext } from "../../contexts/AvailableRequestsContext";

export default function UserIcon() {
  const { user, isLoaded } = useUser();
  const [availableRequests, setAvailableRequests] = useState(null);

  const checkAvailableRequests = async () => {
    const response = await fetch("/chat/api/check-requests");
    const data = await response.json();
    setAvailableRequests(data.availableRequests);
  };

  useEffect(() => {
    checkAvailableRequests(); // initial fetch to set availableRequests
  }, []);

  const { availableRequests: updatedAvailableRequests } =
    useAvailableRequestsContext(); // availableRequests context

  useEffect(() => {
    setAvailableRequests(updatedAvailableRequests); // updates when context changes
  }, [updatedAvailableRequests]);

  return (
    <div className="flex items-center gap-3">
      {!isLoaded ? (
        <div className="w-9 h-9 rounded-full bg-gray-300 animate-pulse"></div>
      ) : (
        user && <UserButton />
      )}
      <p className="text-sm text-gray-600 hidden sm:block">
        Today&apos;s Limit:{" "}
        {availableRequests === null ? null : `${availableRequests} / 10 `}
      </p>
    </div>
  );
}
