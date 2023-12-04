import Link from "next/link"
import {BsPlusLg, BsTable, BsFilePlayFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <header className="w-[100%] max-w-7xl mx-auto flex justify-between items-center px-3 border-b-2 border-gray-50 py-3">
      <Link href='/'><p className="text-base font-light md:text-xl flex justify-center items-center gap-1 text-gray-700"> {<BsFilePlayFill/>} RutinaTube</p></Link>
      <div className="flex gap-3">
        <Link href='/create'><button className="bg-gray-50 py-1  px-2 md:px-4 text-sm rounded-md shadow-sm md:text-base text-gray-600 flex justify-center items-center gap-1">Nueva Rutina  {<BsPlusLg/>} </button></Link>
        <Link href='/manage'><button className="bg-gray-700 py-1 px-2   md:px-4 rounded-md text-sm text-gray-100 md:text-base  flex justify-center items-center gap-2 ">Gestionar {<BsTable/>}</button></Link>
      </div>
    </header>
  )
}

export default Navbar
