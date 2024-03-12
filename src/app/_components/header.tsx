
import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

export default function Header() {


  return (
    <Card >
     <CardContent className='flex justify-between items-center flex-row p-5'>
      <Image src="/logo.png" alt='FSW Barber' width={120} height={22} />
        <Button variant="outline" size="icon" className='w-8 h-8'>
          <Menu size={18} />
        </Button>
     </CardContent>
    </Card>
  )
}
