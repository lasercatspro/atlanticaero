import Link from 'next/link'
import React, { useContext } from 'react'
import { AppContext } from '../utils/appContext'
import { useNavigation } from '../utils/useNavigation'
import Social from './Social'



const Footer = () => {
  const { navigationMain, navigationSecond } = useNavigation()

  const ctxProps = useContext(AppContext);
  
  return (
    <footer className="bg-gray-800">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <ul className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
          {navigationMain && navigationMain.map((item) => (
            <li key={item.name} className="px-5 py-2">
              <Link href={item.href}>
                <a className="text-base text-gray-300 hover:text-white">
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
          {navigationSecond && navigationSecond.map((item) => (
            <li key={item.name} className="px-5 py-2">
              <Link href={item.href}>
                <a className="text-base text-gray-300 hover:text-white">
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        {ctxProps?.socials && <ul className="flex justify-center mt-8 space-x-5">
          {ctxProps?.socials?.map(item => <li><Social social={item.social} link={item.link} />
          </li>)}
        </ul>}

        <p className="mt-8 text-base text-center text-gray-400">Site conçu par l'équipe <Link href="https://lasercats.fr"><a className="hover:text-gray-50" >Lasercats</a></Link></p>
      </div >
    </footer >

  )
}

export default Footer
