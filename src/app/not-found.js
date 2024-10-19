import Link from "next/link";

export default function NotFound(){
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <h1>this page can not be found</h1>
            <Link href="/">Home</Link>
        </div>
    )
}