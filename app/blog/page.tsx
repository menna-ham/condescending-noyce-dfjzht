import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Meta",
  description: "Blog page description",
};
export default function page() {
  console.log("Blog Page Loaded");
  return (
    <>
      <h1> Blog Page</h1>
    </>
  );
}
