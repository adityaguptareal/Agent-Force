"use client"
import React, { useState } from 'react'
import Logo from './logo'
import Container from './Container'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from "@/components/ui/button"
import { IconLayoutSidebar, IconX } from '@tabler/icons-react'

const navlinks = [
    {
        title: "Features",
        href: "/features",
    },
    {
        title: "Products",
        href: "/products",
    },
    {
        title: "Socials",
        href: "/socials",
    },
    {
        title: "Pricing",
        href: "/pricing",
    },
]
export default function Navbar() {

    return (
        <div className="border-b border-neutral-200 dark:border-neutral-800">
            <DesktopNavbar />
            <MobileNavbar />
        </div>
    )
}

const MobileNavbar = () => {

    const [open, setOpen] = useState(false)


    return (
        <div className='flex md:hidden px-4 py-2 justify-between '>
            <Logo />
            <button onClick={() => setOpen(!open)}>
                <IconLayoutSidebar className='size-4' />
            </button>
            <AnimatePresence>

                {
                    open && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                backdropFilter: "blur(15px)"
                            }}
                            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                            transition={{ duration: 0.2 }}
                            className='fixed inset-0 px-4 py-2 bg-white dark:bg-black h-full w-full z-50'>
                            <div className='flex items-center justify-between'>
                                <Logo />
                                <button onClick={() => setOpen(false)} className="absolute top-2 right-2 z-[100]">
                                    <IconX className='text-black dark:text-white size-6' />
                                </button>
                            </div>
                            <div className='flex flex-col gap-6 my-10'>
                                {navlinks.map((item, index) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2, delay: index * 0.1 }}
                                    >
                                        <Link href={item.href} key={index} className='text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900  font-medium dark:hover:text-neutral-100 transition-colors'>{item.title}</Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

const DesktopNavbar = () => {
    return (
        <Container className='hidden lg:flex py-4 justify-between items-center'>
            <Logo />
            <div className='flex items-center gap-4'>
                {navlinks.map((item, index) => (
                    <Link href={item.href} key={index} className='text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900  font-medium dark:hover:text-neutral-100 transition-colors'>{item.title}</Link>
                ))}
            </div>
            <div className='flex items-center gap-4'>
                <Link href="/login" className='text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900  font-medium dark:hover:text-neutral-100 transition-colors'>Login</Link>
                <Button>Signup</Button>
            </div>
        </Container>

    )

}
