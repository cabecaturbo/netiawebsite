import Image from 'next/image'

export const LogoWall = () => {
  // Using placeholder paths - replace with actual logo files when available
  const logos = [
    { src: '/bolt.png', alt: 'Logo 1' },
    { src: '/journal.png', alt: 'Logo 2' },
    { src: '/lightbulb-on.png', alt: 'Logo 3' },
    { src: '/brightness.png', alt: 'Logo 4' },
    { src: '/file.svg', alt: 'Logo 5' },
  ]

  return (
    <div className="mt-10 opacity-80">
      <div className="container-g grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
        {logos.map((logo, i) => (
          <div key={i} className="h-8 grayscale opacity-70 hover:opacity-100 transition">
            <Image 
              src={logo.src} 
              alt={logo.alt} 
              width={160} 
              height={32} 
              className="object-contain w-auto h-8" 
            />
          </div>
        ))}
      </div>
    </div>
  )
}




