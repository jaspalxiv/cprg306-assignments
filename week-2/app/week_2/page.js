import Link from "next/link";
import Title from "./title";
export default function Page() {
    return (
        <div>
            <Title />
            <h1>My to week-2</h1>
            <p><Link href="/">Go to home</Link></p>
        </div>
    );
}


