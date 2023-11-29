"use client"

import type { Session } from "next-auth"
import Image from "next/image"
import profilePicPlaceholder from '@/public/profile-pic-placeholder.png'
import { signIn, signOut } from "next-auth/react"
import { AiOutlineMenu } from 'react-icons/ai';
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu"

interface UserMenuButtonProps {
    session: Session | null
}

export default function UserMenuButton({session}: UserMenuButtonProps) {

    const user = session?.user
  return (
    <div className="flex items-center">
        {user ? 
            <div className="flex gap-2 items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Image src={user?.image || profilePicPlaceholder} alt="Profile Picture" width={64} height={64} className="border border-border w-12 rounded-full aspect-square" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-2">
                        <Button className="w-full" onClick={() => signOut({callbackUrl: "/"})}>Sign Out</Button> 
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        :
            <div>
                <Button onClick={() => signIn()}>Sign In</Button> 
            </div>
        }
    </div>
  )
}
