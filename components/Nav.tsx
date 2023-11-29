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
    <header className='sticky top-0 left-0 right-0 bg-opacity-80 backdrop-blur-md bg-white dark:bg-black shadow-md'>
        <ul className='flex items-center justify-between px-24 py-6 max-w-[1200px] mx-auto'>
            <Link href={'/'}>
                <Image
                    src={Logo}
                    alt="Stoic Logo"
                    className="invert dark:invert-0"
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
