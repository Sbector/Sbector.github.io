import Link from "next/link";

const links = [{
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

export default function Home() {
  return (
    <main className='p-24 max-w-3xl m-auto'>
      <ul>
        {links.map(({label,route})=>(
          <li key={label}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
