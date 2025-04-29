import "./globals.css";

export const metadata = {
  title:
    "LangAI | AI-Generated Language Learning Tasks & Instant PDF Downloads",
  description:
    "Create personalized language tasks in seconds with LangAI. Generate AI-powered exercises, refine them, and download as PDFs to practice offline.",
};

// auth
import { ClerkProvider } from "@clerk/nextjs";

//components
import MainHeader from "../../components/Static/MainHeader";
import MainFooter from "../../components/Static/MainFooter";
import AvailableRequestsContextProvider from "../../contexts/GlobalContext";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <AvailableRequestsContextProvider>
        <html lang="en">
          <body className={"w-screen h-screen "}>
            <MainHeader />
            {children}
            <MainFooter />
          </body>
        </html>
      </AvailableRequestsContextProvider>
    </ClerkProvider>
  );
}
