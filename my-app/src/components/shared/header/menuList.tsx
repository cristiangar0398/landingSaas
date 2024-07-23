import Link from "next/link";

export default function MenuList() {
    return (
      <ul>
        <li> <Link href="/"> Home</Link></li>
        <li> <Link href="#servicios"> about us</Link></li>
        <li> <Link href="/products"> products</Link></li>
        <li> <Link href="/services"> services</Link></li>
        <li> <Link href="/skills"> skills</Link></li>
        <li> <Link href="#servicios2">contacts</Link></li>
      </ul>
    );
  }