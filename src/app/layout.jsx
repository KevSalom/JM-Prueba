import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Navbar'
import ReduxProvider from './redux/ReduxProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RutinaTube | Kevin Salom',
  description: 'Optimiza tu rutina de ejercicios con RutinaTube, tu herramienta personal para guardar, organizar y planificar vídeos de entrenamiento de YouTube.',
}

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
    <html lang="en" className='h-full w-full bg-gray-200 overflow-x-hidden'>
      <body className={`${inter.className} w-[100%] max-w-7xl mx-auto`}><Navbar/> {children}</body>
    </html>
    </ReduxProvider>
  )
}
