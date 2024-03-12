
import { db } from '@/app/_lib/prisma';
import BarbershopInfo from './_components/barbershop-info';


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
    }
  })
  
  if (!barbershop){
    return null;
  }

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />
    </div>
  )
}
