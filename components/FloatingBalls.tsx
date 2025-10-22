'use client'

import { useState, useEffect } from 'react'

interface FloatingBall {
  id: string
  size: number
  color: string
  top: string
  left: string
  animation: string
  delay: number
}

export const FloatingBalls = () => {
  const [balls, setBalls] = useState<FloatingBall[]>([])

  useEffect(() => {
    const generateBalls = () => {
      const ballConfigs = [
        { color: 'bg-primary-500/20', animation: 'animate-float' },
        { color: 'bg-blue-500/20', animation: 'animate-float-reverse' },
        { color: 'bg-green-500/20', animation: 'animate-float-slow' },
        { color: 'bg-purple-500/20', animation: 'animate-float' },
        { color: 'bg-primary-500/20', animation: 'animate-float-reverse' },
        { color: 'bg-blue-500/20', animation: 'animate-float-slow' },
        { color: 'bg-green-500/20', animation: 'animate-float' },
        { color: 'bg-purple-500/20', animation: 'animate-float-reverse' }
      ]

      const generatedBalls: FloatingBall[] = ballConfigs.map((config, index) => {
        // Random sizes: blue balls are largest (12-16), others are smaller (4-10)
        const isBlue = config.color === 'bg-blue-500/20'
        const size = isBlue 
          ? Math.floor(Math.random() * 5) + 12 // 12-16
          : Math.floor(Math.random() * 7) + 4  // 4-10

        return {
          id: `ball-${index}`,
          size,
          color: config.color,
          top: `${Math.floor(Math.random() * 60) + 10}%`, // 10-70%
          left: `${Math.floor(Math.random() * 20) + (index % 2 === 0 ? 0 : 80)}%`, // 0-20% or 80-100% (margins)
          animation: config.animation,
          delay: Math.floor(Math.random() * 3000) // 0-3 seconds
        }
      })

      setBalls(generatedBalls)
    }

    generateBalls()
  }, [])

  return (
    <>
      {balls.map((ball) => (
        <div
          key={ball.id}
          className={`absolute ${ball.color} rounded-full ${ball.animation}`}
          style={{
            width: `${ball.size}px`,
            height: `${ball.size}px`,
            top: ball.top,
            left: ball.left,
            animationDelay: `${ball.delay}ms`
          }}
        />
      ))}
    </>
  )
}
