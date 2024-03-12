"use client"

import SideMenu from '@/app/_components/side-menu'
import { Button } from '@/app/_components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/app/_components/ui/sheet'
import { Barbershop } from '@prisma/client'
import { ChevronLeft, MapPin, Menu, Star } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface BarbershopInfoProps {
  barbershop: Barbershop
}

export default function BarbershopInfo({ barbershop }: BarbershopInfoProps) {
  const router = useRouter()
  const handleBackClick = () => {
    router.replace("/")
  }

  return (
    <div>
      <div className='h-[250px] w-full relative'>
        <Button 
          size="icon" 
          variant="outline" 
          className='z-50 absolute top-4 left-4'
          onClick={handleBackClick}
        >
          <ChevronLeft />
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className='z-50 absolute top-4 right-4'>
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent className='p-0'>
            <SideMenu />
          </SheetContent>
        </Sheet>

        <Image 
          src={barbershop.imageUrl} 
          alt={barbershop.name} 
          fill
          style={{
            objectFit: 'cover'
          }} 
        />
      </div>

      <div className='px-5 pt-3 pb-6 border-b border-solid border-secondary'>
        <h1 className='font-bold text-xl'>{barbershop.name}</h1>
        <div className='flex items-center gap-1 mt-2'>
          <MapPin className='text-primary' size={18}/>
          <p className="text-sm">{barbershop.address}</p>
        </div>

        <div className="flex item-center gap-1 mt-2">
          <Star className='text-primary' size={18} />
          <p className='text-sm'>5,0 (899 avaliação)</p>
        </div>
      </div>
    </div>
  )
}
