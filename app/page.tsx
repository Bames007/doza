import { Analytics } from "@vercel/analytics/next";
import HomePage from "./home/page";

export default function Home() {
  return (
    <>
      <Analytics />
      <HomePage />
    </>
  );
}
