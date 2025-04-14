"use server";

import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";

export async function checkAvailableRequests() {
  try {
    const { userId, redirectToSignIn } = await auth();

    // checks if authenticated
    if (!userId) return redirectToSignIn();

    // retrieves current user and public metadata (contains availableRequests count)
    const user = await currentUser();
    const publicMetadata = user.publicMetadata || {};

    // checks when was the previous reset
    const today = new Date().toISOString().split("T")[0];
    const lastReset = publicMetadata.lastReset ?? null;

    // sets up a new clerkClient instance (needed to update publicMetadata)
    const Clerk = await clerkClient();

    // resets counter if it's a different day than today
    if (lastReset !== today) {
      console.log("updating");
      await Clerk.users.updateUser(user.id, {
        publicMetadata: {
          // resets availableRequests
          availableRequests: 10,
          lastReset: today,
        },
      });
    }

    if (publicMetadata.availableRequests <= 0) {
      return { status: "fail" };
    }

    return { status: "success" };
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error(err);
    }
    return { status: "fail" };
  }
}

export async function updateAvailableRequestCount() {
  try {
    const { userId, redirectToSignIn } = await auth();

    // checks if authenticated
    if (!userId) return redirectToSignIn();

    // retrieves current user and public metadata (contains availableRequests count)
    const user = await currentUser();
    const publicMetadata = user.publicMetadata || {};

    // sets up a new clerkClient instance (needed to update publicMetadata)
    const Clerk = await clerkClient();

    // creates a new object for publicMetadata
    const updatedPublicMetadata = {
      ...publicMetadata,
      availableRequests: publicMetadata.availableRequests - 1,
    };

    await Clerk.users.updateUser(userId, {
      // passes the new metadata object
      publicMetadata: updatedPublicMetadata,
    });
    return { status: "success" };
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error(err);
    }
    return { status: "fail" };
  }
}
