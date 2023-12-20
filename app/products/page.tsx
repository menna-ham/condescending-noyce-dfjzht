import Link from "next/link";
export default function page() {
  return (
    <div>
      <Link href="/"> Home</Link>
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
