"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'


export default function LandingImages() {
  return (
    <div className="relative">
      <div className='relative h-[50vh] md:min-h-140 w-full pt-20 perspective-distant transform-3d mask-b-from-50% translate-x-20'>
        <div className='absolute inset-0 h-full w-full mask-b-from-50% bg-white'></div>
        <motion.div
          initial={
            {
              opacity: 0,
              y: -100,
            }
          }
          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
          className='perspective-[4000px] absolute inset-0 w-full h-full'>

          <Image src='https://assets.aceternity.com/agenforce-demo-2.jpg' className={cn("rounded-lg absolute inset-0 mask-r-from-50% mask-b-from-50% shadow-2xl object-cover")} alt='agen-force-hero-image' width={1080} height={1920} style={{ transform: "rotateY(30deg) rotateX(20deg) rotateZ(-15deg)" }} />
        </motion.div>
        <motion.div
          initial={
            {
              opacity: 0,
              y: -200,
            }
          }
          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.3,
            ease: "easeOut",
            delay: 0.2
          }}
          className='perspective-[4000px] absolute inset-0 w-full h-full translate-x-4 -translate-y-4 md:translate-x-20 md:-translate-y-20'>
          <Image src='https://assets.aceternity.com/agenforce-demo-1.jpg' className={cn("rounded-lg absolute inset-0 translate-x-10 md:translate-x-20 mask-r-from-50% mask-b-from-80% shadow-2xl object-cover")} alt='agen-force-hero-image' width={1080} height={1920} style={{ transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)" }} />
        </motion.div>
      </div>
    </div>
  )
}
