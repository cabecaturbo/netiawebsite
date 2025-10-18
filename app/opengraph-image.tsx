import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Netia - AI That Works'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1677ff 0%, #0b63d1 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 24,
            textAlign: 'center',
          }}
        >
          Netia
        </div>
        <div
          style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: 32,
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          AI That Works
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}



