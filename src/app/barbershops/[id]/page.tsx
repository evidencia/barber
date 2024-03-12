
import { db } from '@/app/_lib/prisma';
import BarbershopInfo from './_components/barbershop-info';
import ServiceItem from './_components/service-item';


interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  }
}

export default async function BarbershopDetailsPage({ params }: BarbershopDetailsPageProps) {
  if (!params.id){
    return null;
  }
  
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id
    },
    include: {
      services: true
    }
  })
  
  if (!barbershop){
    return null;
  }

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />
      
      <div className='flex flex-col gap-4 px-5 py-6'>
        {barbershop.services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}
