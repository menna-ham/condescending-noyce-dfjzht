"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function page() {
  let router = useRouter();
  let handleClick = () => {
    console.log("routing to home");
    router.replace("/");
  };
  return (
    <div>
      {/* <Link href="/"> Home</Link> */}
      <button onClick={handleClick} className="bg-green-400 p-2 my-5">
        Back to Home Page{" "}
      </button>
      <h1> Products List</h1>
      <h3>
        {/* replace:replacing the current state instead of adding new URl to the stack */}
        <Link href="/products/1" replace>
          Product 1
        </Link>{" "}
      </h3>
      <h3>
        {" "}
        <Link href="/products/1">Product 2</Link>
      </h3>
      <h3>
        {" "}
        <Link href="/products/1">Product 3</Link>
      </h3>
      <h3>
        {" "}
        <Link href="/products/1">Product 4</Link>
      </h3>
    </div>
  );
}
