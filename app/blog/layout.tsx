import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Layout Title",
//   // description: "Layout Description",
// };

export default function layout({ children }: { children: React.ReactNode }) {
  console.log("layput loaded");
  return (
    <div style={{ backgroundColor: "beige", borderRadius: "2rem" }}>
      {children}
    </div>
  );
}
