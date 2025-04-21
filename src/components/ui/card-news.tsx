import { serviceImage } from '@/assets'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'

type CardNewsProps = {
  info: any
}
const CardNews = (props: CardNewsProps) => {
  const { info } = props
  return (
    <Card className='w-full bg-[#F9F9FB] shadow-none'>
      <CardHeader>
        <AspectRatio ratio={16 / 9} className=''>
          <Image src={serviceImage.aiv1} alt={info.title} fill className='h-full w-full rounded-md object-cover' />
        </AspectRatio>
      </CardHeader>
      <CardContent className='flex flex-col items-start gap-3'>
        <Badge variant='default'>{info.type}</Badge>
        <p className='text-2xl leading-9 font-semibold capitalize'>{info.title}</p>
      </CardContent>
      <CardFooter className='flex items-center gap-3'>
        <p className='text-muted-foreground'>{info.publishedAt}</p>
        <p className='text-muted-foreground'>{info.author}</p>
      </CardFooter>
    </Card>
  )
}

export default CardNews
