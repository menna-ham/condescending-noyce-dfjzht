import { Metadata } from "next";
const metadata: Metadata = {
  title: "About Meta",
  description: "About page description",
};
export default function page() {
  console.log("About Page Loaded");
  return (
    <>
      <h1> About Page</h1>
    </>
  );
}
