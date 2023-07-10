'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react"

const links = [
    {
        href: 'blog',
        label: 'Blog',
    },
    {
        href: 'logowanie',
        label: 'Logowanie',
    }
]


export const Navigation = () => {
    const segment = useSelectedLayoutSegment()
    const { data: session } = useSession()

    return (
        <nav className='flex flex-row w-full justify-between items-center p-4 border-b-2'>
            <Link href="/">
                <Image
                    src="/logo.svg"
                    width={200}
                    height={200}
                    alt="Logo"
                />
            </Link>
            <ul className="flex gap-4">
                {links.map((link, i) =>
                    <li key={i} className={`hover:bg-slate-100 rounded-lg px-2 ${segment === link.href ? 'font-bold' : ''}`}>
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                )}
                {session ? <button onClick={() => signOut}>Wyloguj sie</button> : <button onClick={() => signIn}>Zaloguj sie</button>}
            </ul>
        </nav>)
};
