import Image, { ImageProps } from 'next/image'

const BASE = '/buildforce'

export default function Img(props: ImageProps) {
  const src = typeof props.src === 'string' ? `${BASE}${props.src}` : props.src
  return <Image {...props} src={src} />
}
