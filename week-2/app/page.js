import Image from "next/image";
//import layout from "./layout.js"
import Link from "next/link";


export default function Home() {
  let a = 5;
  let b = 10;
  return (
    <div>
      <h1>My app week-2</h1>
      <p><Link href="/week_2" > Go to Week 2</Link></p>
    </div>
  );
}


