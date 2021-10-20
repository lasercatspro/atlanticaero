import Link from 'next/link'
import {useNavigation} from '../utils/useNavigation'

const Footer = () => {
  const {navigationMain, navigationSecond} = useNavigation()

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
        {/* <div className="flex justify-center mt-8 space-x-6">
        {navigation.social.map((item) => (
          <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">{item.name}</span>
            <item.icon className="w-6 h-6" aria-hidden="true" />
          </a>
        ))}
      </div> */}
        <p className="mt-8 text-base text-center text-gray-400">Site conçu par l'équipe <Link href="https://lasercats.fr"><a className="hover:text-gray-50" >Lasercats</a></Link></p>
      </div >
    </footer >

  )
}

export default Footer
