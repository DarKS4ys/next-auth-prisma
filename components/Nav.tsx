import Image from 'next/image'
import { ModeToggle } from './ui/toggle-mode'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import UserMenuButton from './UserMenuButton'
import Logo from '@/public/STOIC.png'
import Link from 'next/link'

export default async function Nav() {
    const session = await getServerSession(authOptions)
return (
<header className='z-50 px-8 py-4 flex items-center justify-center sticky top-0 border-b border-border bg-background/90 backdrop-blur-md transition-all duration-300'>
        <ul className='max-w-6xl justify-between items-center flex w-full'>
            <Link href={'/'}>
                <Image
                    src={Logo}
                    alt="Stoic Logo"
                    className="invert dark:invert-0 object-cover w-[2.2rem] h-12"
                    width={45}
                    height={55}
                    priority
                    placeholder='blur'
                />
            </Link>
            <li className='flex gap-3 items-center'>
                <ModeToggle/>
                <UserMenuButton session={session}/>
            </li>
        </ul>
    </header>
  )
}
