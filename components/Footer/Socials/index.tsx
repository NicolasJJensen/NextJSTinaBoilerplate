import { SocialsType } from './schemaType.tina'
import Link from 'next/link'
import Image from 'next/image'
import styles from './socials.module.scss'

export default function Socials(props: SocialsType) {
  return (
    <span>
      {props.socials?.map((social, i) => (
        <Link key={i} href={social.socialUrl || '#'} passHref>
          <a>
            <Image width={50} height={50} src={social.iconUrl || ''} alt={social.socialName || ''} />
          </a>
        </Link>
      ))}
    </span>
  )
}
