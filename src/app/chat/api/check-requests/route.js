import { checkAvailableRequests } from "../../../../../utils/userMetadataCheckers";

export async function GET() {
  try {
    // This route is called from within the UserIcon component
    // It's mainly used for new users who don't have publicMetadata set yet, but it also works for already registered users to reset their metadata if new day.
    // The server action (checkAvailableRequests) handles initializing or resetting this metadata.
    const response = await checkAvailableRequests();
    return Response.json(response);
  } catch (err) {
    return Response.json({ status: "fail" });
  }
}
