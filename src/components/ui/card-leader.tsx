import { serviceImage } from '@/assets'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

type CardLeaderProps = {
  info: any
}
const CardLeader = (props: CardLeaderProps) => {
  const { info } = props
  return (
    <Card className='w-full bg-[#F9F9FB] shadow-none'>
      <CardContent className='flex flex-col items-center gap-4'>
        <AspectRatio ratio={2 / 2} className=''>
          <Image src={serviceImage.aiv1} alt={info.title} fill className='h-full w-full rounded-md object-cover' />
        </AspectRatio>
        <div>
          <p className='text-[2.25rem] leading-[54px] font-semibold'>{info.name}</p>
          <p className='text-3xl leading-9 font-light'>{info.title}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardLeader
