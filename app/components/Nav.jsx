import Link from "next/link"

const links = [{
    label: 'home',
    route: './'
},{
    label: 'about',
    route: './about'
},{
    label: 'archive',
    route: './archive'
},{
    label: 'blog',
    route: './blog'
},{
    label: 'contact',
    route: './contact'
}]

export default function Nav() {
    return (
        <nav>
            <ul className="flex justify-between text-sky-500">
                {links.map(({label,route}) => (
                    <li key={route}>
                        <Link href={route}>{label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}