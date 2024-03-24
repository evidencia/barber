import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Prisma } from '@prisma/client'
import { format, isPast } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      service: true,
      barbershop: true,
    }
  }>
}
export default function BookingItem({ booking}: BookingItemProps) {
  const isBookingConfirmed = isPast(booking.date)
  
  return (
    <Card>
      <CardContent className='flex px-0 py-0'>
        <div className="flex flex-col gap-2 py-5 flex-[3] pl-5">
          <Badge 
            variant={isBookingConfirmed ? 'secondary' : 'default'}
            className='w-fit'>
            {isBookingConfirmed ? 'Finalizado' : 'Confirmado'}
          </Badge>
          <h2 className='font-bold'>{booking.service.name}</h2>

          <div className="flex items-center gap-2">
            <Avatar className='w-6 h-6'>
              <AvatarImage src={booking.barbershop.imageUrl} />
              <AvatarFallback>ED</AvatarFallback>
            </Avatar>

            <h3 className='text-sm'>{booking.barbershop.name}</h3>
          </div>
        </div>

        <div className='flex flex-col flex-1 items-center justify-center border-l border-solid border-secondary'>
          <p className='text-sm capitalize'>
            {format(booking.date, 'MMMM', {
              locale: ptBR
            })}
          </p>
          <p className='text-2xl'>{format(booking.date, 'dd')}</p>
          <p className='text-sm'>{format(booking.date, 'hh:mm')}</p>
        </div>
      </CardContent>
    </Card>
  )
}
