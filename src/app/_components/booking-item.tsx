import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function BookingItem() {

  return (
    <Card>
      <CardContent className='flex justify-between p-5 py-0'>
        <div className="flex flex-col gap-2 py-5">
          <Badge className='w-fit bg-[#221C3D] text-primary hover:bg-[#221C3D]'>Confirmado</Badge>
          <h2 className='font-bold'>Corte de Cabelo</h2>

          <div className="flex items-center gap-2">
            <Avatar className='w-6 h-6'>
              <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
              <AvatarFallback>ED</AvatarFallback>
            </Avatar>

            <h3 className='text-sm'>Vintage Barber</h3>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center border-l border-solid border-secondary px-3'>
          <p className='text-sm'>Março</p>
          <p className='text-2xl'>06</p>
          <p className='text-sm'>09:45</p>
        </div>
      </CardContent>
    </Card>
  )
}
