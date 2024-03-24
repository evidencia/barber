import React from 'react'
import Header from '../_components/header'
import { getServerSession } from 'next-auth'
import { authOption } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { db } from '../_lib/prisma'
import BookingItem from '../_components/booking-item'
import { isFuture, isPast } from 'date-fns'

export default async function BookingsPage() {
  // recuper a sessão do usuarios (ver se ele esta logado ou não)
  const session = await getServerSession(authOption)

  //se ele não estiver logado, redirecionar para pagina de login
  if (!session?.user) {
    return redirect('/')
  }


  const [confirmedBookings, finishedBookings] = await Promise.all([
    db.booking.findMany({
      where: {
        userId: (session.user as any).id,
        date: {
          gte: new Date(),
        }
      },
      include: {
        service: true,
        barbershop: true,
      }
    }),

    db.booking.findMany({
      where: {
        userId: (session.user as any).id,
        date: {
          lt: new Date(),
        }
      },
      include: {
        service: true,
        barbershop: true,
      }
    }),
  ])

  return (
    <div>
      <Header />
      <div className='px-5 py-6'>
        <h1 className='text-xl font-bold'>Agendamentos</h1>

        <h2 className='text-gray-400 uppercase font-bold text-sm mt-6 mb-3'>Confirmados</h2>

        <div className="flex flex-col gap-3">
          {confirmedBookings.map((booking) =>(
            <BookingItem booking={booking} key={booking.id} />
          ))}
        </div>

        <h2 className='text-gray-400 uppercase font-bold text-sm mt-6 mb-3'>Finalizado</h2>

        <div className="flex flex-col gap-3">
          {finishedBookings.map((booking) =>(
            <BookingItem booking={booking} key={booking.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
