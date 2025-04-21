import { serviceImage } from '@/assets'
import { SVGIcon } from '@/components/icon-svg'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

type CardProjectProps = {
  info: any
}
const CardProject = (props: CardProjectProps) => {
  const { info } = props
  return (
    <Card className='w-full bg-[#F9F9FB] shadow-none'>
      <CardHeader className='gap-5'>
        <CardTitle className='flex items-center justify-between'>
          <p className='text-2xl leading-9 font-semibold'>{info.title}</p>
          <Button size='icon' className='rounded-md' variant={'default'}>
            {<SVGIcon.ArrowUpRightUp />}
          </Button>
        </CardTitle>
        <CardDescription className='text-muted-foreground text-lg leading-6 font-normal'>
          {info.description}
        </CardDescription>
      </CardHeader>
      <CardContent className='mx-6 border-t-2 px-0 pt-5'>
        <AspectRatio ratio={16 / 9} className=''>
          <Image src={serviceImage.aiv1} alt={info.title} fill className='h-full w-full rounded-md object-cover' />
        </AspectRatio>
      </CardContent>
    </Card>
  )
}

export default CardProject
