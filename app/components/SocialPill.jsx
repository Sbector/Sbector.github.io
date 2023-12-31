import Link from "next/link"


export default function SocialPill({ children, href }) {
    return (
            <Link href={href} target="_blank" className="rounded-full border border-gray-50 bg-zinc-800 flex justify-center items-center gap-x-2 py-2 px-4 hover:border-green-400 hover:text-green-200 transition-all">
                {children}
            </Link>
    )
}