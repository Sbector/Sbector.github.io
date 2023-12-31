import Link from "next/link"
import Wrapper from "./Wrapper"

const links = [{
    label: 'acerca de',
    route: '#about'
}, {
    label: 'contacto',
    route: '#contacto'
}, {
    label: 'blog / recursos',
    route: './blog'
}]

export default function HomeNav() {
    return (
        <Wrapper>
            <nav >
                <ul className="flex-col justify-center items-start gap-4 inline-flex">
                    {links.map(({ label, route }) => (
                        <li key={label} className="text-4xl font-semibold uppercase hover:text-green-500 hover:-mx-1 transition-all">
                            <Link href={route}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </Wrapper>
    )
}