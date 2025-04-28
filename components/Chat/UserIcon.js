"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

// context
import { useAvailableRequestsContext } from "../../contexts/AvailableRequestsContext";

export default function UserIcon() {
  const { user, isLoaded } = useUser();
  const [availableRequests, setAvailableRequests] = useState(null);

  // calls the api endpoint that returns user's availableRequests
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
    <div className="flex items-center">
      {!isLoaded ? (
        <div className="w-9 h-9 rounded-full bg-gray-300 animate-pulse"></div>
      ) : (
        user && (
          <div className="flex flex-col items-start">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-12 h-12 sm:h-29 sm:w-29",
                },
              }}
            />
            <p className="sm:hidden text-xs text-gray-600 ">
              Limit:{" "}
              {availableRequests === null ? null : `${availableRequests} / 10 `}
            </p>
          </div>
        )
      )}

      <p className="text-sm md:text-base text-gray-600 hidden sm:block pl-2">
        Today&apos;s Limit:{" "}
        {availableRequests === null ? null : `${availableRequests} / 10 `}
      </p>
    </div>
  );
}
