import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export default function Subheading({
    children,
    className,
    tag: Tag = 'p'
}: {
    children: ReactNode,
    className?: string,
    tag?: 'h1' | 'h2' | 'p'
}) {
    return (
        <Tag className={cn("text-base md:text-lg text-neutral-400 dark:text-neutral-600 font-inter max-w-xl", className)}>
            {children}
        </Tag>
    )
}