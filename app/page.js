import Image from "next/image";
import Link  from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>The heading: CPRG 306: Web Development 2 - Assignments</h1>
     
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <ul>
      <li><Link href={"./week-2/"}>Week 2</Link></li>
      <li><Link href={"./week-3/"}>Week 3</Link></li>
      <li><Link href={"./week-4/"}>Week 4</Link></li>
      <li><Link href={"./week-5/"}>Week 5</Link></li>
      <li><Link href={"./week-6/"}>Week 6</Link></li>
      <li><Link href={"./week-7/"}>Week 7</Link></li>
      </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
