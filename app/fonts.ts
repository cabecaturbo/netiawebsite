import { Sora, Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const gyrochrome = localFont({
  src: [
    {
      path: '../public/fonts/Gyrochrome-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gyrochrome-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gyrochrome-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gyrochrome-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gyrochrome-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gyrochrome-Heavy.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-gyrochrome',
  display: 'swap',
})

export const sora = Sora({ 
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-sora'
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})





