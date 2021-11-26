import { Navbar as PropsType } from '@/tina/__generated__/types'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/helpers/classNames'
import styles from './navbar.module.scss'

export default function Navbar(props: PropsType) {

  const layoutClass = {
    'Left Aligned Links': styles.leftLinks,
    'Right Aligned Links': styles.rightLinks,
  }[props.layout || 'Left Aligned Links'] as string
  
  const navClasses = [
    styles.navbar,
    props.fixed ? styles.fixed: '',
    layoutClass,
  ]

  return (
    <nav className={cn(navClasses)}>
      <Link passHref href='/'>
        <a>
          <Image width={80} height={40} src={props?.logo || 'https://source.unsplash.com/600x300/?logo'} alt='logo' />
        </a>
      </Link>
      <ul>
        {props.navbarLinks?.map((navbarLink, i) => (
            <li key={i}>
              <Link href={navbarLink?.url || '#'}>{navbarLink?.label || ''}</Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}
