import * as React from 'react'
type SvgProps = React.SVGProps<SVGSVGElement>
const ArrowUpRightUp = (props: SvgProps) => {
  const { className } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={13} height={12} fill='none' {...props}>
      <path
        stroke='#FCFCFC'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.667}
        d='m1.666 11 10-10m0 0H4.999m6.667 0v6.667'
        className={className}
      />
    </svg>
  )
}
export default ArrowUpRightUp
