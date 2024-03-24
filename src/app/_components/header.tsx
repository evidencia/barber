"use client"

import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

import SideMenu from './side-menu'

export default function Header() {

  return (
    <Card >
     <CardContent className='flex justify-between items-center flex-row p-5'>
      <Image src="/logo.png" alt='FSW Barber' width={120} height={22} />
      
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className='w-8 h-8'>
            <Menu size={18} />
          </Button>
        </SheetTrigger>

        <SheetContent className='p-0'>
          <SideMenu />
        </SheetContent>
      </Sheet>
     </CardContent>
    </Card>
  )
}
