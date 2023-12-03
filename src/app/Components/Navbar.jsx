import Link from "next/link"

const Navbar = () => {
  return (
    <header className="w-[100%] max-w-7xl mx-auto flex justify-between items-center px-3 border-b-2 border-gray-50 py-3">
      <Link href='/'><p className="text-xl font-light">MyFitness</p></Link>
      <div className="flex gap-3">
        <Link href='/create'><button className="bg-gray-50 py-1 px-4 rounded-md shadow-sm ">Crear</button></Link>
        <Link href='/manage'><button className="bg-gray-800 py-1 px-4 rounded-md text-gray-50">Gestionar</button></Link>
      </div>
    </header>
  )
}

export default Navbar
