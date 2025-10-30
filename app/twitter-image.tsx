import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'NETIA — AI powered Chatbot'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

const fontExtraBoldPromise = fetch(new URL('../public/fonts/Gyrochrome-ExtraBold.otf', import.meta.url)).then(r => r.arrayBuffer()).catch(() => undefined)
const fontMediumPromise = fetch(new URL('../public/fonts/Gyrochrome-Medium.otf', import.meta.url)).then(r => r.arrayBuffer()).catch(() => undefined)

export default async function Image() {
  const [fontExtraBold, fontMedium] = await Promise.all([fontExtraBoldPromise, fontMediumPromise])

  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#000000',
            width: '100%',
            padding: '64px',
          }}
        >
          <div
            style={{
              fontFamily: fontExtraBold ? 'Gyrochrome' : 'system-ui, Arial, sans-serif',
              fontSize: 160,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            NETIA
          </div>
          <div
            style={{
              marginTop: 16,
              fontFamily: fontMedium ? 'Gyrochrome' : 'system-ui, Arial, sans-serif',
              fontSize: 64,
              fontWeight: 500,
              letterSpacing: -0.5,
              lineHeight: 1.2,
            }}
          >
            AI powered Chatbot
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        ...(fontExtraBold
          ? [{ name: 'Gyrochrome', data: fontExtraBold, weight: 800 as const, style: 'normal' as const }]
          : []),
        ...(fontMedium
          ? [{ name: 'Gyrochrome', data: fontMedium, weight: 500 as const, style: 'normal' as const }]
          : []),
      ],
    }
  )
}




