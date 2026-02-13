"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

export default function LogoColud() {
    const logos = [
        {
            "title": "Open Ai",
            "src": "https://assets.aceternity.com/logos/openai.png"
        },
        {
            "title": "portola",
            "src": "https://assets.aceternity.com/logos/portola.png"
        },
        {
            "title": "Hello Patient",
            "src": "https://assets.aceternity.com/logos/hello-patient.png"
        },
        {
            "title": "Granola",
            "src": "https://assets.aceternity.com/logos/granola.png"
        },
        {
            "title": "Character Ai",
            "src": "https://assets.aceternity.com/logos/characterai.png",

        },
        {
            "title": "Oracle",
            "src": "https://assets.aceternity.com/logos/oracle.png",
        }
    ]
    return (
        <section className='pb-10 md:pb-20'>
            <h2 className='text-center max-w-xl mx-auto text-neutral-600 dark:text-neutral-400 text-lg font-medium '>Trusted by modern operators across industries. <br /> <span className='text-neutral-400 dark:text-neutral-400'>From pilot to scale without chaos</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 mx-auto max-w-3xl mt-10">

                {logos.map((logo, index) => (
                    <div key={index}>
                        <motion.div initial={{
                            opacity: 0,
                            y: -10,
                            filter: "blur(10px)"
                        }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)"
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                                delay: 0.2 * index
                            }}>
                            <Image className='size-20 object-contain mx-auto' src={logo.src} alt={logo.title} width={100} height={100} />
                        </motion.div>

                    </div>
                ))}
            </div>
        </section>
    )
}