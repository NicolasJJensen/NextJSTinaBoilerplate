import './navbar.module.scss'
import { Navbar as PropsType } from '@/tina/__generated__/types'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Navbar(props: PropsType) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Navbar</a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {props.navbarLinks?.map(navbarLink => (
            <Fragment key={navbarLink?.label}>
              {navbarLink?.url && navbarLink?.label && (
                <li key={navbarLink.label} className="nav-item">
                  <Link href={navbarLink.url}>{navbarLink.label}</Link>
                </li>
              )}
            </Fragment>
          ))}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}
