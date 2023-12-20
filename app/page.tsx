import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline"> Home Page</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/products"}>Products</Link>
    </main>
  );
}
