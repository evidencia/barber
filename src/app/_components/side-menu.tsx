"use client"

import { Button } from './ui/button'
import Link from 'next/link'
import { Calendar, Home, LogIn, LogOut, User } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { SheetHeader, SheetTitle } from './ui/sheet'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function SideMenu() {
  const { data } = useSession()

  const handleLogoutClick = () => signOut()
  const handleLoginClick = () => signIn('google')


  return (
    <div>
      <SheetHeader className='text-left border-b border-solid border-secondary p-5'>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      {data?.user ? (
        <div className="flex items-center justify-between px-5 py-6">
          <div className='flex items-center gap-3 px-5 py-6'>
            <Avatar>
              <AvatarImage src={data.user?.image ?? ''} />
            </Avatar>

            <h2 className="font-bold">{data.user.name}</h2>
          </div>

          <Button variant="outline" size="icon">
            <LogOut onClick={handleLogoutClick}/>
          </Button>
        </div>
      ): (
        <div className='flex flex-col px-5 py-6 gap-3'>
          <div className="flex items-center gap-2">
            <User size={32} />
            <h2 className="font-bold">Olá, faça seu login!</h2>
          </div>

          <Button variant="secondary" className='w-full justify-start' onClick={handleLoginClick}>
            <LogIn size={18} className='mr-2' />
            Fazer login
          </Button>
        </div>
      )}

      <div className="flex flex-col gap-3 px-5">
        <Button variant="outline" className="justify-start" asChild>
          <Link href='/'>
            <Home size={18} className='mr-2' />
            Início
          </Link>
        </Button>

        {data?.user && (
          <Button variant="outline" className="justify-start" asChild>
            <Link href='/bookings'>
              <Calendar size={18} className='mr-2' />
              Agendamentos</Link>
          </Button>
        )}
      </div>
    </div>
  )
}
