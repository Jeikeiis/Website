import Navegacion from "../app/components/Navegacion";
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Currículum Vitae',
  description: 'Resumen',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      
      <Navegacion/>
      </body>
    </html>
  )
}
