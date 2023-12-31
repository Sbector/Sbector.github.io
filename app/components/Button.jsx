import Link from "next/link";

export default function Button({ href, children }) {
    return (
        <button className="w-20 bg-slate-500 hover:bg-green-500 rounded-md px-2">
            <Link href={href}>
                {children}
            </Link>
        </button>
    )
}